"use client"
import useAxiosInstance from "@/Hooks/useAxiosInstance";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterUserForm = () => {
    let [selectedImage, setSelectedImage] = useState(null);
    let axiosInstance = useAxiosInstance();

    let handleImageChange = (e) => {
        let file = e.target.files[0];

        if (file) {
            if (file.type.startsWith('image/')) {
                setSelectedImage(file);
            } else {
                setSelectedImage(null);
                toast.error("Please upload a valid image")
            }
        }
    };

    let handleRegister = async (e) => {
        e.preventDefault();

        if (!selectedImage) {
            toast.error("Please upload an image");
            return;
        }

        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let image = e.target.elements.image.files[0];

        let data = new FormData();
        data.append("image", image);

        if (password.length < 6) {
            return toast.error("Password Length should atleast be 6 Characters!")
        }

        if (!/[A-Z]/.test(password)) {
            return toast.error("Password should contain at least one capital letter!")
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return toast.error("Password should contain at least one special character!")
        }
        let loadingToast = toast.loading('Registering...');

        try {
            let res = await axios.post("https://api.imgbb.com/1/upload?key=cbd289d81c381c05afbab416f87e8637", data);
            let imageUrl = res.data.data.display_url;
            let userDetails = { name, email, imageUrl, role: "user" };

            signUp(email, password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    profileUpdate(name, imageUrl)
                        .then(() => {

                            axiosInstance.post("/userRegister", userDetails)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.insertedId) {
                                        toast.dismiss(loadingToast);
                                        toast.success("Registration Successful. Please Login");
                                        console.log(user);
                                        navigate("/login");
                                    }
                                })
                                .catch((error) => {
                                    console.timeLog(error);
                                })
                        })
                })
                .catch((error) => {
                    let errorCode = error.code;
                    console.log(errorCode)
                    if (errorCode === "auth/email-already-in-use") {
                        toast.dismiss(loadingToast);
                        return toast.error("Email is already being used");
                    }
                });
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.dismiss(loadingToast);
            toast.error("Error uploading image");
        }
    }

    return (
        <form onSubmit={handleRegister} className='mt-6'>
            <div>
                <label className='text-md font-medium'>Full Name<span className='text-red-500'>*</span></label> <br></br>
                <input type='name' name="name" className='w-full mt-2 border-2 border-[#442b20] px-6 py-2 rounded-md' placeholder='Enter Your Full Name' required></input>
            </div>

            <div className='mt-4'>
                <label className='text-md font-medium'>Email<span className='text-red-500'>*</span></label> <br></br>
                <input type='email' name="email" className='w-full mt-2 border-2 border-[#442b20] px-6 py-2 rounded-md' placeholder='Enter Your Email Address' required></input>
            </div>

            <div className='mt-4'>
                <label className='text-md font-medium'>Password<span className='text-red-500'>*</span></label> <br></br>
                <input type='password' name="password" className='w-full mt-2 border-2 border-[#442b20] px-6 py-2 rounded-md' placeholder='Enter Password' required></input>
            </div>

            <div className='mt-5 bg-white w-full m-auto rounded-xl'>
                <div className='px-5 py-3 relative border-2 border-[#442b20] rounded-lg'>
                    <div className='flex flex-col w-max mx-auto text-center'>
                        <label>
                            <input
                                className='text-sm cursor-pointer w-36 hidden'
                                type='file'
                                name='image'
                                id='image'
                                accept='image/*'
                                hidden
                                onChange={handleImageChange}
                            />
                            <div className='bg-[#442b20] text-white font-semibold cursor-pointer py-2 px-3 hover:bg-[#442b20] rounded-xl'>
                                {selectedImage ? selectedImage.name : "Upload Profile Picture"}
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <button type='submit' className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 mt-5 w-full rounded-md">
                <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Register</span>
                <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
        </form>
    );
};

export default RegisterUserForm;