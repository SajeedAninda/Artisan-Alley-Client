"use client"
import useAuth from '@/Hooks/useAuth';
import useAxiosInstance from '@/Hooks/useAxiosInstance';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
    let router = useRouter();
    let { googleLogin } = useAuth();
    let axiosInstance = useAxiosInstance();

    let handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                let userDetails = { name: user?.displayName, email: user?.email, imageUrl: user?.photoURL, role: "user" }

                axiosInstance.post("/userGoogleRegister", userDetails)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            console.log(res.data);
                        }
                    })
                toast.success('Logged In Successfully!', {
                    duration: 3000,
                });
                router.push("/")
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div onClick={handleGoogleLogin} className='flex justify-center'>
            <button className=' mt-3 cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 rounded-md'>
                <span className="flex justify-between items-center gap-2 relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">
                    <FaGoogle />
                    Google
                </span>
                <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
        </div>
    );
};

export default GoogleLogin;