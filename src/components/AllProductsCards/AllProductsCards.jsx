import useAxiosInstance from '@/Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const AllProductsCards = () => {
    let axiosInstance = useAxiosInstance();

    const { data: allProducts, isLoading: isProductsLoading, refetch } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getAllProducts`);
            return response.data;
        }
    });

    console.log(allProducts);

    return (
        <div>
            {isProductsLoading ? (
                <div className='h-screen flex justify-center items-center text-3xl font-bold text-[#442b20]'>Loading...</div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                    {allProducts?.map(product => (
                        <div key={product.id} className="card">
                            <div className="bg-white rounded-lg shadow-lg flex flex-col">
                                <div className="relative">
                                    <Image width={400} height={400} className="rounded-t-lg w-full h-[200px] object-cover" src={product?.imageUrl} alt="" />
                                </div>
                                <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-b-lg">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{product?.product_name}</h5>
                                    <p className="mb-3 font-normal text-white">
                                        {product?.product_short_description}
                                    </p>
                                    <p className="mb-3 font-normal text-white">
                                        From <span className='font-semibold'>{product?.artisan_name}</span>
                                    </p>
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{product?.product_price}$ / Piece</h5>
                                    <button className="lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2 w-full">
                                        <span className="relative z-10 text-white group-hover:text-[#442b20] text-lg duration-500">View Details</span>
                                        <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                        <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProductsCards;
