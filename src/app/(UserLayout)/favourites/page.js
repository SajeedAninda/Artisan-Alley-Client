import UserRoute from '@/components/Authentication/UserRoute/UserRoute';
import FavouriteProducts from '@/components/FavouriteProducts/FavouriteProducts';
import React from 'react';

const Favourites = () => {
    return (
        <UserRoute>
            <div className='w-[90%] mx-auto py-8'>
                <div className='space-y-2'>
                    <h1 className='text-[#442b20] text-4xl text-center font-bold'>Favourite Products</h1>
                    <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>See The Products that you have Added to Favourites</p>
                </div>

                <>
                    <FavouriteProducts></FavouriteProducts>
                </>
            </div>
        </UserRoute>
    );
};

export default Favourites;