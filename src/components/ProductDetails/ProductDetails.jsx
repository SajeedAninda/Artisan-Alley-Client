"use client"
import useAxiosInstance from '@/Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const ProductDetails = ({ params }) => {
    let axiosInstance = useAxiosInstance();

    const { data: productDetails, isLoading: isProductLoading } = useQuery({
        queryKey: ['productDetails', params],
        queryFn: async () => {
            const response = await axiosInstance.get(`/productDetails/${params.id}`);
            return response.data;
        },
        enabled: !!params,
    });

    let _id, product_name, product_price, product_category, product_short_description, product_broad_description, product_location, imageUrl, addedTime;
    if (productDetails) {
        ({ _id, product_name, product_price, product_category, product_short_description, product_broad_description, product_location, imageUrl, addedTime } = productDetails);
    }

    return (
        <div className='py-8 w-[90%] mx-auto'>
            <div className='flex gap-10 items-center'>
                <div>
                    <Image width={400} height={400} className="rounded-lg w-[500px] h-[400px] border-8 border-[#442b20] object-cover" src={imageUrl} alt="" />

                    <div className='space-y-3 mt-3'>
                        <button className="lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-full">
                            <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Order Now</span>
                            <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                            <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                        </button>

                        <button className="lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-full">
                            <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Add to Favourites</span>
                            <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                            <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                        </button>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;