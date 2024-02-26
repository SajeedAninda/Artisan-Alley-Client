"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaQuoteLeft } from "react-icons/fa";
import banner1 from "@/assets/banner/banner1.png"
import banner2 from "@/assets/banner/banner2.png"
import banner3 from "@/assets/banner/banner3.png"
import Image from 'next/image';
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';


const Banner = () => {
    const [tab, setTab] = useState(1);
    const tabs = useRef(null);
    let { loggedInUser } = useAuth();

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement) {
            tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
        }
    };

    useEffect(() => {
        heightFix();
        const interval = setInterval(() => {
            setTab((prevTab) => (prevTab % 3) + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-white">
            <div className="relative w-[95%] mx-auto px-4 sm:px-6">
                <div className="py-16">
                    <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 flex-1" data-aos="fade-right">
                            <div className="mb-8 md:mb-0">
                                <div
                                    className={`flex items-center transition duration-300 ease-in-out mb-3 cursor-auto ${tab !== 1 ? 'hidden' : ''}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div className='flex flex-col gap-2 space-y-3'>
                                        <h1 className='text-[#442b20] text-5xl font-bold'>
                                            Unique Creations, Endless Inspiration: Explore a World of Handmade Wonders
                                        </h1>
                                        <h2 className='text-[#442b20] text-xl font-bold'>
                                            From hand-carved treasures to intricately woven textiles, our artisans bring creativity to life. Dive into a world where every piece tells a story.
                                        </h2>
                                        {
                                            loggedInUser ?
                                                <Link href={"/products"} className="hidden lg:inline-block text-center cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-[40%]">
                                                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Explore</span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                                </Link>

                                                : 
                                                
                                                <Link href={"/login"} className="hidden lg:inline-block text-center cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-[40%]">
                                                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Learn More</span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                                </Link>
                                        }
                                    </div>
                                </div>

                                <div
                                    className={`flex items-center transition duration-300 ease-in-out cursor-auto mb-3 ${tab !== 2 ? 'hidden' : ''}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(2); }}
                                >
                                    <div className='flex flex-col gap-2 space-y-3'>
                                        <h1 className='text-[#442b20] text-5xl font-bold'>
                                            Embrace the Artisanal Difference: Elevate Your Lifestyle with Local Craftsmanship
                                        </h1>
                                        <h2 className='text-[#442b20] text-xl font-bold'>
                                            Discover products that go beyond the ordinary. Each item is a testament to the skill and dedication of our local artisans, adding a touch of uniqueness to your lifestyle.
                                        </h2>
                                        {
                                            loggedInUser ?
                                                <Link href={"/products"} className="hidden lg:inline-block text-center cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-[40%]">
                                                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Explore</span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                                </Link>

                                                : 
                                                
                                                <Link href={"/login"} className="hidden lg:inline-block text-center cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-[40%]">
                                                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Learn More</span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                                </Link>
                                        }
                                    </div>
                                </div>

                                <div
                                    className={`flex items-center transition duration-300 ease-in-out mb-3 cursor-auto ${tab !== 3 ? 'hidden' : ''}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(3); }}
                                >
                                    <div className='flex flex-col gap-2 space-y-3'>
                                        <h1 className='text-[#442b20] text-5xl font-bold'>
                                            Connecting Hearts, Crafting Dreams: Uncover the Artistry of Your Community
                                        </h1>
                                        <h2 className='text-[#442b20] text-xl font-bold'>
                                            At the heart of our marketplace is a community of passionate artisans. Join us in celebrating craftsmanship, supporting dreams, and fostering connections that transcend borders.
                                        </h2>
                                        {
                                            loggedInUser ?
                                                <Link href={"/products"} className="hidden lg:inline-block text-center cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-[40%]">
                                                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Explore</span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                                </Link>

                                                : 
                                                
                                                <Link href={"/login"} className="hidden lg:inline-block text-center cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-[40%]">
                                                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Learn More</span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                                </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex-1">
                            <div className="transition-all">
                                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                                    {/* Item 1 */}
                                    <Transition
                                        show={tab === 1}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 flex justify-center">
                                            <Image
                                                src={banner3}
                                                width={470}
                                                height={470}
                                                alt="Website Logo"
                                            />
                                        </div>
                                    </Transition>

                                    {/* Item 2 */}
                                    <Transition
                                        show={tab === 2}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 flex justify-center">
                                            <Image
                                                src={banner2}
                                                width={470}
                                                height={470}
                                                alt="Website Logo"
                                            />
                                        </div>
                                    </Transition>

                                    {/* Item 3 */}
                                    <Transition
                                        show={tab === 3}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 flex justify-center">
                                            <Image
                                                src={banner1}
                                                width={470}
                                                height={470}
                                                alt="Website Logo"
                                            />
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;