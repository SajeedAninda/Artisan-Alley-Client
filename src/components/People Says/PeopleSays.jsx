"use client"
import Image from 'next/image';
import img1 from "@/assets/reviewers/img1.png"
import img2 from "@/assets/reviewers/img2.png"
import img3 from "@/assets/reviewers/img3.png"
import img4 from "@/assets/reviewers/img4.png"
import img5 from "@/assets/reviewers/img5.png"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./review.css"

const PeopleSays = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <div className='text-center space-y-6 pt-10'>
                <h1 className='text-[#442b20] font-bold text-4xl  md:text-5xl'>What Peoples Says About Us</h1>
                <h3 className='text-[#442b20] font-semibold text-xl mt-3 w-[80%] mx-auto'>Each testimonial is a testament to the thriving community we've built, where creativity flourishes, connections bloom, and every voice contributes to the rich tapestry of artisanal appreciation. Join us in celebrating the stories that shape Artisan Alley</h3>
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* SLIDE 1  */}
                <SwiperSlide>
                    <div className='flex items-center py-12 gap-10'>
                        <div className='w-[40%] flex justify-end'>
                            <Image src={img1} width={300} height={300} />
                        </div>
                        <div className='w-[60%] space-y-3'>
                            <div className='stars flex '>
                                <svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <h2 className='text-2xl font-bold text-[#442b20] w-[90%] italic'>
                                "As a seasoned crafter specializing in handmade textiles, Artisan Alley has been a true gem for sourcing unique materials and connecting with fellow artisans. The variety and quality of materials available here are unparalleled. A solid 5-star rating!"
                            </h2>
                            <h3 className='text-xl font-bold text-[#442b20]'>
                                - Alex Thompson, Crafter
                            </h3>
                            <h3 className='text-lg font-medium text-[#442b20]'>
                                Expert in Handmade Textiles
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>

                {/* SLIDE 2  */}
                <SwiperSlide>
                    <div className='flex items-center py-12 gap-10'>
                        <div className='w-[40%] flex justify-end'>
                            <Image src={img2} width={300} height={300} />
                        </div>
                        <div className='w-[60%] space-y-3'>
                            <div className='stars flex '>
                                <svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <h2 className='text-2xl font-bold text-[#442b20] w-[90%] italic'>
                                "Artisan Alley is my go-to place for finding inspiration and materials for my DIY home decor projects. The diverse range of handmade items and craft supplies is impressive. The only reason I'm not giving it a perfect 5 is because I wish they had extended weekend hours. Nonetheless, highly recommended!"
                            </h2>
                            <h3 className='text-xl font-bold text-[#442b20]'>
                                - Emily Weaver, User
                            </h3>
                            <h3 className='text-lg font-medium text-[#442b20]'>
                                DIY Home Decor Enthusiast
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>

                {/* SLIDE 3  */}
                <SwiperSlide>
                    <div className='flex items-center py-12 gap-10'>
                        <div className='w-[40%] flex justify-end'>
                            <Image src={img3} width={300} height={300} />
                        </div>
                        <div className='w-[60%] space-y-3'>
                            <div className='stars flex '>
                                <svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <h2 className='text-2xl font-bold text-[#442b20] w-[90%] italic'>
                                "As a metalworking artisan, I've found Artisan Alley to be an invaluable resource. The selection of metals, tools, and workshops provided have elevated my craft to new heights. The supportive community and friendly staff make it a joy to visit. Solid 5 stars!"
                            </h2>
                            <h3 className='text-xl font-bold text-[#442b20]'>
                                - Olivia Stone, Crafter
                            </h3>
                            <h3 className='text-lg font-medium text-[#442b20]'>
                                Metalworking Artisan
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>

                {/* SLIDE 4  */}
                <SwiperSlide>
                    <div className='flex items-center py-12 gap-10'>
                        <div className='w-[40%] flex justify-end'>
                            <Image src={img4} width={300} height={300} />
                        </div>
                        <div className='w-[60%] space-y-3'>
                            <div className='stars flex '>
                                <svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <h2 className='text-2xl font-bold text-[#442b20] w-[90%] italic'>
                                "Artisan Alley is a haven for handmade jewelry enthusiasts like me. The curated collection of unique pieces is exquisite. The craftsmanship and attention to detail in every item are truly commendable. I'm a loyal customer and would rate it 5 stars without hesitation!"
                            </h2>
                            <h3 className='text-xl font-bold text-[#442b20]'>
                                - Liam Baker, User
                            </h3>
                            <h3 className='text-lg font-medium text-[#442b20]'>
                                Handmade Jewelry Collector
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>

                {/* SLIDE 5  */}
                <SwiperSlide>
                    <div className='flex items-center py-12 gap-10'>
                        <div className='w-[40%] flex justify-end'>
                            <Image src={img5} width={300} height={300} />
                        </div>
                        <div className='w-[60%] space-y-3'>
                            <div className='stars flex '>
                                <svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg class="w-8 h-8 ms-3 text-[#926d5c] dark:text-[#926d5c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <h2 className='text-2xl font-bold text-[#442b20] w-[90%] italic'>
                                "Artisan Alley has been my go-to spot for woodworking supplies. The quality of wood and the availability of specialty tools are fantastic. While I appreciate the variety, I wish they had more advanced workshops for woodworking. Still, a solid 4-star rating!"
                            </h2>
                            <h3 className='text-xl font-bold text-[#442b20]'>
                                - Eva Rodriguez, Crafter
                            </h3>
                            <h3 className='text-lg font-medium text-[#442b20]'>
                                Woodworking Artisan
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PeopleSays;