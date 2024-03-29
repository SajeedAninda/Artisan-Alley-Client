import AddProductForm from '@/components/AddProductForm/AddProductForm';
import ArtisanRoute from '@/components/Authentication/ArtisanRoute/ArtisanRoute';
import React from 'react';

const AddProducts = () => {
    return (
        <ArtisanRoute>
            <div className='py-8'>
                <div className='space-y-2'>
                    <h1 className='text-[#442b20] text-4xl text-center font-bold'>Add Products</h1>
                    <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>Present your crafted products for display to your valued customers.</p>
                </div>

                <AddProductForm></AddProductForm>
            </div>
        </ArtisanRoute>
    );
};

export default AddProducts;