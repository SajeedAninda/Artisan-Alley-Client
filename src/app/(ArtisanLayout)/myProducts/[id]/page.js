import ArtisanRoute from '@/components/Authentication/ArtisanRoute/ArtisanRoute';
import UpdateProducts from '@/components/UpdateProduct/UpdateProducts';
import React from 'react';

const UpdateProduct = ({ params }) => {

    return (
        <ArtisanRoute>
            <div className='py-8'>
                <div className='space-y-2'>
                    <h1 className='text-[#442b20] text-4xl text-center font-bold'>Update Product</h1>
                    <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>Update the Product that you have added to make any changes.</p>
                </div>
                <UpdateProducts params={params}></UpdateProducts>
            </div>
        </ArtisanRoute>
    );
};

export default UpdateProduct;