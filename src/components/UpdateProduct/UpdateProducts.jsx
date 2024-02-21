"use client"
import useAxiosInstance from '@/Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UpdateProducts = ({ params }) => {
    let axiosInstance = useAxiosInstance();

    const { data: productDetails, isLoading: isProductLoading } = useQuery({
        queryKey: ['productDetails', params],
        queryFn: async () => {
            const response = await axiosInstance.get(`/productDetails/${params.id}`);
            return response.data;
        },
        enabled: !!params,
    });

    console.log(productDetails);

    return (
        <div className='w-[90%] mx-auto mt-4'>
            Hello
        </div>
    );
};

export default UpdateProducts;