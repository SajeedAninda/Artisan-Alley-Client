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

    let _id, product_name, product_price, product_category, product_short_description, product_broad_description, product_location, imageUrl, addedTime, artisan_name, artisan_email;
    if (productDetails) {
        ({ _id, product_name, product_price, product_category, product_short_description, product_broad_description, product_location, imageUrl, addedTime, artisan_name, artisan_email } = productDetails);
    }

    let formatDateString = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className='py-8 w-[90%] mx-auto'>
            <div className='flex gap-10'>
                <div className='flex-1'>
                    <Image width={400} height={400} className="rounded-lg w-full h-[400px] border-8 border-[#442b20] object-cover" src={imageUrl} alt="" />

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

                <div className='flex-1'>
                    <div>
                        <h2 className='text-4xl font-bold text-[#442b20]'>{product_name}</h2>
                        <h2 className='text-2xl font-bold text-[#442b20] mt-3'>{product_short_description}</h2>
                        <h2 className='text-lg font-semibold text-[#442b20] mt-3'>{product_broad_description}</h2>
                        <h2 className='text-3xl font-bold text-[#442b20] mt-3'>Product Price: {product_price}$ / Piece</h2>
                        <h2 className='text-2xl font-semibold text-[#442b20] mt-3'>Product Location: {product_location}</h2>
                        <h2 className='text-lg font-semibold text-[#442b20] mt-3 capitalize'>Product ID:  {_id && _id.slice(-9)}</h2>
                        <h2 className='text-lg font-semibold text-[#442b20] mt-3'>Product Added on {addedTime && formatDateString(addedTime)}</h2>
                        <div className='bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-md p-4 w-full text-center mt-3'>
                            <h2 className='text-xl font-bold text-white'>Crafted By {artisan_name}</h2>
                            <h2 className='text-lg font-bold text-white'>{artisan_email}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;