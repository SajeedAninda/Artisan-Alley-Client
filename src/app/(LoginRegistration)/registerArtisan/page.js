import Image from 'next/image';
import joinAsArtisan from "@/assets/register/joinAsArtisan.jpg"
import Link from 'next/link';
import RegisterArtisanForm from '@/components/RegisterArtisanForm/RegisterArtisanForm';

const RegisterArtisan = () => {
    return (
        <div className='bg-[#926d5c67] py-16'>
            <div className='flex w-[85%] mx-auto shadow-2xl'>
                <div className='flex-1 bg-white px-12 md:px-24 py-16'>
                    <div className='mt-8'>
                        <h2 className='text-3xl text-[#442b20] font-bold'>Register as an Artisan</h2>
                        <p className='mt-3 text-[#442b20]'>Please fill up the form with your information to Register as an Artisan to post, display and sell your products</p>
                    </div>

                    <RegisterArtisanForm></RegisterArtisanForm>

                    <p className='text-center mt-6 text-[#442b20]'>Already have any Account? <Link className='text-[#442b20] font-bold hover:underline' href={"/login"}>Login</Link></p>
                </div>

                <div className='flex-1 hidden lg:inline-block'>
                    <Image className='w-full object-cover h-full' src={joinAsArtisan} alt='login image'></Image>
                </div>
            </div>
        </div>
    );
};

export default RegisterArtisan;