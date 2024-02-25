import React from 'react';
import RecentProductsCards from './RecentProductsCards';

const RecentProducts = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <div className='text-center space-y-6 pt-10'>
                <h1 className='text-[#442b20] font-bold text-4xl  md:text-5xl'>Most Recent <span className='text-[#926d5c] underline hover:text-[#442b20] cursor-pointer'>Products</span></h1>
                <h3 className='text-[#442b20] font-semibold text-xl mt-3 w-[80%] mx-auto'>Discover the Latest Additions - Unveiling Our Most Recent Artisanal Creations</h3>
            </div>

            <div className='w-full'>
                <RecentProductsCards></RecentProductsCards>
            </div>
        </div>
    );
};

export default RecentProducts;