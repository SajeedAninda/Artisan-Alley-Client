"use client";
import useProductsByArtisan from "@/Hooks/useProductsByArtisan";
const ArtisanMyProducts = () => {

    let { products } = useProductsByArtisan();
    console.log(products[0]);

    return (
        <div>
            My Products
        </div>
    );
};

export default ArtisanMyProducts;