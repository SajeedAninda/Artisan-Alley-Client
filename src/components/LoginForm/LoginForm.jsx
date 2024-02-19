"use client"
import useAuth from "@/Hooks/useAuth";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';


const LoginForm = () => {
    let { signIn } = useAuth();
    const router = useRouter();


    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let loadingToast = toast.loading('Logging In...');
        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.dismiss(loadingToast);
                toast.success('Logged In Successfully!');
                router.push('/');
            })
            .catch((error) => {
                let errorCode = error.code;
                console.log(errorCode);
                if (errorCode === "auth/invalid-credential") {
                    toast.dismiss(loadingToast);
                    return toast.error("Invalid Username or Password")
                }
            });
    }

    return (
        <form onSubmit={handleLogin} className='mt-6'>
            <div>
                <label className='text-md font-medium'>Email<span className='text-red-500'>*</span></label> <br></br>
                <input type='email' name="email" className='w-full mt-2 border-2 border-[#442b20] px-6 py-2 rounded-md' placeholder='Enter Your Email Address'></input>
            </div>

            <div className='mt-4'>
                <label className='text-md font-medium'>Password<span className='text-red-500'>*</span></label> <br></br>
                <input type='password' name="password" className='w-full mt-2 border-2 border-[#442b20] px-6 py-2 rounded-md' placeholder='Enter Password'></input>
            </div>

            <button type='submit' className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 mt-5 w-full rounded-md">
                <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Log In</span>
                <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
        </form>
    );
};

export default LoginForm;