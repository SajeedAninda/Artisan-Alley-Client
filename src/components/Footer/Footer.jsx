import React from 'react';
import logo from "@/assets/logo/logo.png"
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="w-full flex items-center justify-center bg-[#926d5c] pt-16 pb-8">
            <div className="w-[90%] mx-auto px-4 text-white flex flex-col">
                <div className="w-full text-5xl font-bold">
                    <h1 className="w-full md:w-2/3">Crafting connections, One creation at a time</h1>
                </div>
                <div className="flex mt-8 flex-col md:flex-row md:justify-between items-center">
                    <p className="w-full md:w-2/3 text-white">Thank you for supporting local artisans and embracing the artful journey together.</p>
                    <button className="hidden lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2">
                        <span className="relative z-10 text-white group-hover:text-[#926d5c] text-lg duration-500">Contact US</span>
                        <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                        <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="flex mt-24 mb-12 flex-row justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <div><Image src={logo} height={70} width={70} /></div>
                            <h2 className='text-2xl font-bold text-white'>
                                Artisan Alley
                            </h2>
                        </div>
                        <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase hover:opacity-50">Home</a>
                        <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase hover:opacity-50">Products</a>
                        <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase hover:opacity-50">Artisans</a>
                        <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase hover:opacity-50">Events</a>
                        <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase hover:opacity-50">Community</a>
                        <div className="flex flex-row space-x-8 items-center justify-between">
                            <FaFacebook className='text-xl hover:opacity-50 cursor-pointer'/>
                            <FaYoutube className='text-xl hover:opacity-50 cursor-pointer'/>
                            <FaInstagram className='text-xl hover:opacity-50 cursor-pointer'/>
                        </div>
                    </div>
                    <hr className="border-white" />
                    <p className="w-full text-center text-white mt-4">Copyright © 2024 Artisan Alley</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;