import ArtisanCard from '@/components/ArtisanCard/ArtisanCard';
import React from 'react';

const Artisans = () => {
    return (
        <div className='w-[90%] mx-auto py-12'>
            <div className='space-y-2'>
                <h1 className='text-[#442b20] text-4xl text-center font-bold'>Artisans</h1>
                <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>Welcome to our Artisans Page, where creativity meets craftsmanship! Explore a diverse collection of talented artisans and discover their unique creations that inspire and delight.
                </p>
            </div>

            <>
            <ArtisanCard></ArtisanCard>
            </>
        </div>
    );
};

export default Artisans;