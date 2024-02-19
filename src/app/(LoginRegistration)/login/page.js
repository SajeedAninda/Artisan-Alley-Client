import Image from 'next/image';
import logo from "@/assets/logo/logo.png"
import GoogleLogin from '@/components/GoogleLogin/GoogleLogin';
import loginImg from "@/assets/login/loginImg.jpg"
import Link from 'next/link';
import LoginForm from '@/components/LoginForm/LoginForm';

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

                    <LoginForm></LoginForm>

                    <p className='text-center mt-6 text-[#442b20]'>Or Login as User With</p>
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