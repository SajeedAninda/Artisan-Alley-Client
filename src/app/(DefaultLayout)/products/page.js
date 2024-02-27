import AllProducts from '@/components/AllProducts/AllProducts';
import PrivateRoute from '@/components/Authentication/PrivateRoute/PrivateRoute';
import React from 'react';

const Products = () => {
    return (
        <PrivateRoute>
            <div className='w-[90%] mx-auto py-12'>
                <div className='space-y-2'>
                    <h1 className='text-[#442b20] text-4xl text-center font-bold'>All Products</h1>
                    <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>Discover every product created by our skilled craftsmen using search and filtering options for efficient browsing.</p>
                </div>

                <>
                    <AllProducts></AllProducts>
                </>
            </div>
        </PrivateRoute>
    );
};

export default Products;