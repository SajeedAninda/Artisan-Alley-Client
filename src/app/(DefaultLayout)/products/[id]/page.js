import ProductDetails from '@/components/ProductDetails/ProductDetails';
import React from 'react';

const ProductDetail = ({params}) => {
    return (
        <>
            <ProductDetails params={params}></ProductDetails>
        </>
    );
};

export default ProductDetail;