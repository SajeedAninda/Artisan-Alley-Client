"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import logo from "@/assets/logo/logo.png"
import { FaRegWindowClose } from "react-icons/fa";
import { TfiMenuAlt } from 'react-icons/tfi';
import useAuth from '@/Hooks/useAuth';
import Image from 'next/image';

const UserHeader = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    let [showLogout, setShowLogout] = useState(false);
    let { loggedInUser, logOut } = useAuth();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    let handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged Out")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    let toggleLogout = () => {
        setShowLogout(!showLogout);
    }

    return (
        <div className="">
                <div className='bg-[#926d5c] shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]'>
                    <div className="relative px-4 py-4 flex justify-between items-center w-[95%] mx-auto">
                        <Link href="/">
                            <div className='flex gap-3 items-center'>
                                {/* LOGO  */}
                                <Image
                                    src={logo}
                                    width={70}
                                    height={70}
                                    alt="Website Logo"
                                />

                                <h2 className='text-2xl font-bold text-white'>
                                    Artisan Alley
                                </h2>
                            </div>
                        </Link>

                        <div className="lg:hidden">
                            <button className="navbar-burger flex items-center justify-end text-white text-2xl p-3" onClick={toggleMenu}>
                                <TfiMenuAlt />
                            </button>
                        </div>

                        {/* NAVLINKS  */}
                        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 text-lg font-semibold text-white">
                            <li className='relative group'>
                                <Link href={"/"} className=" transition-all duration-300">
                                    Home
                                    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 "></span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <h3>|</h3>
                            </li>
                            <li className='relative group'>
                                <Link href={"/addProducts"} className=" transition-all duration-300">
                                    Add Products
                                    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <h3>|</h3>
                            </li>
                            <li className='relative group'>
                                <Link href={"/myProducts"} className=" transition-all duration-300">
                                    My Products
                                    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <h3>|</h3>
                            </li>
                            <li className='relative group'>
                                <Link href={"/bookings"} className=" transition-all duration-300">
                                    Bookings
                                    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                </Link>
                            </li>
                        </ul>

                        {/* BUTTONS  */}
                        {
                            loggedInUser ?
                                <div onClick={toggleLogout} className='pl-4 relative z-50'>
                                    <img className='w-[70px] h-[70px] object-cover rounded-full border-4 hover:opacity-70 border-white cursor-pointer' src={loggedInUser?.photoURL} alt="" />

                                    <button onClick={handleLogOut} className={`top-20 right-0 px-9 z-50 py-2 border-4 border-white text-white  cursor-pointer text-lg font-bold overflow-hidden bg-[#926d5c] rounded-md  transition-all duration-400 ease-in-out shadow-md hover:scale-105  hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#442b20] before:to-[#926d5c] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 absolute ${showLogout ? "translate-y-0" : "hidden translate-y-[-10px]"}`}>
                                        Log Out
                                    </button>
                                </div>
                                :
                                <div className='flex gap-3'>
                                    <Link href={"/login"} className="hidden lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2">
                                        <span className="relative z-10 text-white group-hover:text-[#926d5c] text-lg duration-500">Sign In</span>
                                        <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                        <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                    </Link>
                                    <Link href={"/register"} className="hidden lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2">
                                        <span className="relative z-10 text-white group-hover:text-[#926d5c] text-lg duration-500">Sign Up</span>
                                        <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                        <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                    </Link>
                                </div>
                        }


                    </div>
                </div>



                {/* MOBILE VIEW  */}
                <div className={`navbar-menu relative z-50 ${menuVisible ? '' : 'hidden'}`}>
                    <div className="navbar-backdrop fixed inset-0 bg-white opacity-25" onClick={closeMenu}></div>
                    <div className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#926d5c] border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <Link href="/">
                                <div className='flex gap-3 items-center'>
                                    {/* LOGO  */}
                                    <Image
                                        src={logo}
                                        width={70}
                                        height={70}
                                        alt="Website Logo"
                                    />

                                    <h2 className='text-2xl font-bold text-white'>
                                        Artisan Alley
                                    </h2>
                                </div>
                            </Link>
                            <button className="navbar-close flex items-center justify-end text-white text-2xl p-3" onClick={closeMenu}>
                                <FaRegWindowClose />
                            </button>
                        </div>
                        <div>
                            <ul className='text-xl text-white font-semibold mt-4 space-y-6'>
                                <li className='relative group'>
                                    <Link href={"/"} className=" transition-all duration-300">
                                        Home
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 "></span>
                                    </Link>
                                </li>
                                <li className="text-white">
                                </li>
                                <li className='relative group'>
                                    <Link href={"/addProducts"} className=" transition-all duration-300">
                                        Add Products
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                    </Link>
                                </li>
                                <li className="text-white">
                                </li>
                                <li className='relative group'>
                                    <Link href={"/myProducts"} className=" transition-all duration-300">
                                        My Products
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                    </Link>
                                </li>
                                <li className="text-white">
                                </li>
                                <li className='relative group'>
                                    <Link href={"/bookings"} className=" transition-all duration-300">
                                        Bookings
                                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#F7FFF7] rounded-2xl transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3 mt-10'>
                            <Link href={"/login"} className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2">
                                <span className="relative z-10 text-white group-hover:text-[#926d5c] text-lg duration-500">Sign In</span>
                                <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                            </Link>
                            <Link href={"/register"} className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2">
                                <span className="relative z-10 text-white group-hover:text-[#926d5c] text-lg duration-500">Sign Up</span>
                                <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default UserHeader;