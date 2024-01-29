import React from 'react';
import artisanImg1 from "@/assets/whatisartisan/artisanImg.jpg"
import artisanImg2 from "@/assets/whatisartisan/artisanImg2.jpg"
import artisanImg3 from "@/assets/whatisartisan/artisanImg3.jpg"
import artisanImg4 from "@/assets/whatisartisan/artisanImg4.jpg"
import Image from 'next/image';
import Link from 'next/link';

const WhatIsArtisan = () => {
    return (
        <div className=' chooseBg'>
            <div className='w-[95%] mx-auto'>
                <div className='text-center space-y-6 pt-10'>
                    <h1 className='text-[#442b20] font-bold text-4xl  md:text-5xl'>What is <span className='text-[#926d5c] underline hover:text-[#442b20] cursor-pointer'>Artisan Alley?</span></h1>
                    <h3 className='text-[#442b20] font-semibold text-xl mt-3'>Explore our Artisan Alley, a curated space where the stories of local craftspeople come to life. In this vibrant corner of our marketplace, each handmade product is a masterpiece, crafted with passion and showcased with pride. Immerse yourself in the narratives behind every creation, as our artisans share their unique journeys and the artistry that goes into each piece. </h3>
                </div>
                <section className="flex items-center pb-10 font-poppins">
                    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8" data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                                <div className="flex gap-6 md:gap-0 flex-wrap" >
                                    <div className="w-full px-4 md:w-1/2">
                                        <Image src={artisanImg1} alt="" width={500} height={400} className="object-cover w-full mb-6 rounded-lg h-80" />
                                        <Image src={artisanImg2} alt="" width={500} height={400} className="object-cover w-full rounded-lg h-80" />
                                    </div>
                                    <div className="w-full px-4 md:w-1/2 xl:mt-11">
                                        <Image src={artisanImg3} alt="" width={500} height={400} className="object-cover w-full mb-6 rounded-lg h-80" />
                                        <Image src={artisanImg4} alt="" width={500} height={400} className="object-cover w-full rounded-lg h-80" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8" data-aos="zoom-in-down" data-aos-anchor-placement="top-bottom">
                                <span className="text-[#442b20] font-bold text-2xl">What we do?</span>
                                <h2 className="mt-2 mb-4 text-[#442b20] font-medium text-lg">
                                    we are dedicated to empowering local artisans and fostering a vibrant community of craftsmanship. Our mission is to curate a diverse collection of handmade products that showcases the unique artistry of each creator.
                                </h2>

                                <ul className="mb-10">
                                    <li className="flex items-center mb-4 text-base text-[#442b20]">
                                        <span className="mr-3 text-[#442b20]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Cultural Showcase: </span>Celebrate diverse cultures through a curated collection of handmade products that encapsulate the traditions and artistry of communities worldwide.
                                        </span>
                                    </li>

                                    <li className="flex items-center mb-4 text-base text-[#442b20]">
                                        <span className="mr-3 text-[#442b20]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Transparent Dialogues:</span> Foster transparent and meaningful dialogues between artisans and consumers, encouraging collaboration and a shared passion for craftsmanship</span>
                                    </li>

                                    <li className="flex items-center mb-4 text-base text-[#442b20]">
                                        <span className="mr-3 text-[#442b20]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Ethical Crafting:</span> Promote ethical practices by ensuring fair compensation for artisans, supporting integrity in craftsmanship.</span>
                                    </li>


                                    <li className="flex items-center mb-4 text-base text-[#442b20]">
                                        <span className="mr-3 text-[#442b20]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Educational Insights:</span>Offer bite-sized educational resources, sharing insights into crafting techniques, sustainable practices, and the inspiring stories behind each artisan's creative journey.
                                        </span>
                                    </li>

                                </ul>
                                <Link href={"/"}>
                                    <button className="hidden lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-[50%]">
                                        <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Log In to Learn More</span>
                                        <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                        <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhatIsArtisan;