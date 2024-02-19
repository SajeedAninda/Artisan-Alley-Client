import React from 'react';
import { MdMarkEmailUnread } from "react-icons/md";
import LottieComponent from './LottieComponent';


const Newsletter = () => {
    return (
        <div className='w-[95%] mx-auto py-12'>
            <div className='bg-gradient-to-r from-[#442b20] to-[#926d5c] px-8 flex flex-col lg:flex-row justify-between items-center rounded-2xl h-fit py-12 lg:py-0'>
                <LottieComponent></LottieComponent>

                <div className="textDiv w-full lg:w-[60%]">
                    <div className='space-y-3'>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white'>Subscribe to</h3>
                        <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white'>Our Newsletter</h2>
                        <p className='text-lg font-semibold text-white'>
                            Stay informed about upcoming artisan markets, workshops, and community events happening near you.
                        </p>

                        <form className='mt-5'>
                            <div className='relative mt-5'>
                                <input placeholder='Enter your email to get all the latest updates' className='rounded-[50px] w-full py-3 px-12 placeholder:text-[#926d5c] placeholder:font-semibold' type="email" />
                                <MdMarkEmailUnread className='text-[#926d5c] text-2xl absolute top-3 left-4' />

                                <button className="lg:inline-block cursor-pointer overflow-hidden relative z-100 border border-white group px-6 py-2 mt-4 w-full rounded-[50px] font-bold">
                                    <span className="relative z-10 text-white group-hover:text-[#926d5c] text-xl duration-500">Subscribe</span>
                                    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                    <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;