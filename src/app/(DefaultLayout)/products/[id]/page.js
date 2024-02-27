import PrivateRoute from '@/components/Authentication/PrivateRoute/PrivateRoute';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import React from 'react';

const ProductDetail = ({ params }) => {
    return (
        <>
            <PrivateRoute>
                <ProductDetails params={params}></ProductDetails>
            </PrivateRoute>
        </>
    );
};

export default ProductDetail;