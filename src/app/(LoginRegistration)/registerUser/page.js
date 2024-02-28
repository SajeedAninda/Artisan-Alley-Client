import Image from 'next/image';
import GoogleLogin from '@/components/GoogleLogin/GoogleLogin';
import joinAsUserImg from "@/assets/register/joinAsUserImg.jpg"
import Link from 'next/link';
import RegisterUserForm from '@/components/RegisterUserForm/RegisterUserForm';

const RegisterUser = () => {
    return (
        <div className='bg-[#926d5c67] py-16'>
            <div className='flex w-[85%] mx-auto shadow-2xl'>
                <div className='flex-1 bg-white px-12 md:px-24 py-16'>
                    <div className='mt-8'>
                        <h2 className='text-3xl text-[#442b20] font-bold'>Register as an User</h2>
                        <p className='mt-3 text-[#442b20]'>Please fill up the form with your information to Register as an User and Buy Products</p>
                    </div>

                    <RegisterUserForm></RegisterUserForm>

                    <p className='text-center mt-6 text-[#442b20]'>Or Register With</p>
                    <GoogleLogin></GoogleLogin>

                    <p className='text-center mt-6 text-[#442b20]'>Already have any Account? <Link className='text-[#442b20] font-bold hover:underline' href={"/login"}>Login</Link></p>
                </div>

                <div className='flex-1 hidden lg:inline-block'>
                    <Image className='w-full object-cover h-full' src={joinAsUserImg} alt='login image'></Image>
                </div>
            </div>
        </div>
    );
};

export default RegisterUser;