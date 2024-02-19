import { IoPeopleSharp } from 'react-icons/io5';
import { GiStakeHammer } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';


const Register = () => {
    return (
        <div className='bg-[#926d5c67] h-screen py-16'>
            <div className='w-[85%] mx-auto shadow-2xl bg-white h-[95%]'>
                <h1 className='text-[#442b20] text-3xl pt-8 font-bold text-center'>Please Select Your Role</h1>
                <div className='flex justify-center mt-12 gap-6 items-center'>
                    <div className='flex flex-col justify-center items-center space-y-3 hover:bg-[#442b20] rounded-xl cursor-pointer group p-6 transition-all text-center border-2 border-[#442b20] shadow-lg'>
                        <IoPeopleSharp className='text-[#442b20] font-bold text-[140px] group-hover:text-white' />
                        <h1 className='text-[#442b20] font-bold text-4xl italic group-hover:text-white'>Register as an User</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center space-y-3 hover:bg-[#442b20] rounded-xl cursor-pointer group p-6 transition-all text-center border-2 border-[#442b20] shadow-lg'>
                        <GiStakeHammer className='text-[#442b20] font-bold text-[140px] group-hover:text-white' />
                        <h1 className='text-[#442b20] font-bold text-4xl italic group-hover:text-white'>Register as an Artisan</h1>
                    </div>
                </div>

                <div className='flex justify-center mt-6'>
                    <Link href={"/"} className=' mt-3 cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 rounded-md'>
                        <span className="flex justify-between items-center gap-2 relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">
                            <IoMdArrowRoundBack />
                            Back To Home
                        </span>
                        <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                        <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;