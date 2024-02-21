"use client"
import useAxiosInstance from './useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '@/components/Authentication/AuthProvider';

const useProductsByArtisan = () => {
    let axiosInstance = useAxiosInstance();
    let { loggedInUser } = useContext(AuthContext)
    let currentUserEmail = loggedInUser?.email;

    const { data: products, isLoading: isProductsLoading, refetch } = useQuery({
        queryKey: ['products', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getProducts/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    });

    return { products, isProductsLoading, refetch };
};

export default useProductsByArtisan;