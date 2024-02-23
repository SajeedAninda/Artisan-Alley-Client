"use client"
import useAuth from '@/Hooks/useAuth';
import useAxiosInstance from '@/Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const OrderedProductForArtisan = () => {
    let axiosInstance = useAxiosInstance();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: orders, isLoading: isOrderLoading, refetch } = useQuery({
        queryKey: ['orders', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getOrdersForArtisan/${currentUserEmail}`);
            return response.data;
        }
    })

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }

    return (
        <div>
            {isOrderLoading ? (
                <div className='h-screen flex justify-center items-center text-3xl font-bold text-[#442b20]'>Loading...</div>
            ) : (
                <div>
                    {orders?.length === 0 ? (
                        <div className='h-[90%] flex justify-center items-center py-12'>
                            <h2 className="text-3xl font-bold text-[#442b20]">No Orders / Bookings made</h2>
                        </div>
                    ) : (
                        <div className='py-6 w-[70%] mx-auto'>
                            {orders?.map(order => (
                                <div className='flex gap-6 border-4 border-[#442b20] rounded-md p-8'>
                                    <div className='flex-1'>
                                        <Image className='border-4 rounded-md w-full h-[400px] object-cover border-[#442b20]' width={600} height={400} src={order?.imageUrl} alt='ordered product image'></Image>
                                    </div>
                                    <div className="flex-1 text-center">
                                        <h1 className='font-bold text-3xl text-[#442b20]'>{order?.product_name}</h1>
                                        <h2 className='font-semibold text-xl text-[#442b20] mt-2'>{order?.product_short_description}</h2>
                                        <h2 className='font-bold text-xl text-[#442b20] mt-2'>Ordered By {order?.client_name}</h2>
                                        <h2 className='font-semibold text-2xl text-[#442b20] mt-2'>Quantity:{order?.order_quantity}</h2>
                                        <h2 className='font-bold text-2xl text-[#442b20] mt-2'>Total Receivable: ${order?.product_price * order?.order_quantity}</h2>
                                        <h2 className='font-semibold text-xl text-[#442b20] mt-2'>Shipping Address: {order?.shipping_address}</h2>
                                        <h2 className='font-bold text-xl text-[#442b20] mt-2'>Client Contact:  {order?.client_phone}</h2>
                                        <h2 className='font-semibold text-xl text-[#442b20] mt-2'>Ordered On: {formatDate(order?.orderTime)}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default OrderedProductForArtisan;