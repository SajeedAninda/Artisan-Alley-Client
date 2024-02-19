import React from 'react';
import { FaGoogle } from "react-icons/fa";


const GoogleLogin = () => {
    return (
        <div className='flex justify-center'>
            <button className=' mt-3 cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#926d5c] group px-6 py-2 rounded-md'>
                <span className="flex justify-between items-center gap-2 relative z-10 text-[#926d5c] group-hover:text-white text-lg duration-500">
                    <FaGoogle />
                    Google
                </span>
                <span className="absolute w-full h-full bg-[#926d5c] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span className="absolute w-full h-full bg-[#926d5c] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
        </div>
    );
};

export default GoogleLogin;