import Image from 'next/image';
import logo from "@/assets/logo/logo.png"
import GoogleLogin from '@/components/GoogleLogin/GoogleLogin';
import loginImg from "@/assets/login/loginImg.jpg"
import Link from 'next/link';

const Login = () => {
    return (
        <div className='bg-[#926d5c67] py-16'>
            <div className='flex w-[85%] mx-auto shadow-2xl'>
                <div className='flex-1 bg-white px-24 py-16'>
                    <div className='w-[80px]'>
                        <Image src={logo} alt='logo'></Image>
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-3xl text-[#442b20] font-bold'>Welcome Back !</h2>
                        <p className='mt-3 text-[#442b20]'>Please Login as Artisan or User to access all the available features</p>
                    </div>

                    <form className='mt-6'>
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

                    <p className='text-center mt-6 text-[#442b20]'>Or Login With</p>
                    <GoogleLogin></GoogleLogin>

                    <p className='text-center mt-6 text-[#442b20]'>Don't have any Account? <Link className='text-[#442b20] font-bold hover:underline' href={"/register"}>Register</Link></p>
                </div>

                <div className='flex-1'>
                    <Image className='w-full object-cover h-full' src={loginImg} alt='login image'></Image>
                </div>
            </div>
        </div>
    );
};

export default Login;