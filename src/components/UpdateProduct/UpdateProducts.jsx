"use client"
import useAxiosInstance from '@/Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const UpdateProducts = ({ params }) => {
    let axiosInstance = useAxiosInstance();
    let router =useRouter();

    const { data: productDetails, isLoading: isProductLoading } = useQuery({
        queryKey: ['productDetails', params],
        queryFn: async () => {
            const response = await axiosInstance.get(`/productDetails/${params.id}`);
            return response.data;
        },
        enabled: !!params,
    });

    let _id, product_name, product_price, product_category, product_short_description, product_broad_description, product_location;
    if (productDetails) {
        ({ _id, product_name, product_price, product_category, product_short_description, product_broad_description, product_location } = productDetails);
    }

    let [selectedCategory, setSelectedCategory] = useState(product_category || '');
    let [selectedLocation, setSelectedLocation] = useState(product_location || '');

    let handleUpdateProduct = (e) => {
        e.preventDefault();

        let product_name = e.target.productName.value;
        let product_price = e.target.productPrice.value;
        let product_category = selectedCategory;
        let product_short_description = e.target.productShortDescription.value;
        let product_broad_description = e.target.productBroadDescription.value;
        let product_location = selectedLocation;
        let productDetails = { product_name, product_price, product_category, product_short_description, product_broad_description, product_location };

        let loadingToast = toast.loading('Updating Product...');

        axiosInstance.patch(`/updateProduct/${_id}`, productDetails)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.dismiss(loadingToast);
                    toast.success("Updated Product Successfully");
                    router.push("/myProducts");
                }
            })
    }

    return (
        <div className='w-[90%] mx-auto mt-4'>
            <form onSubmit={handleUpdateProduct}>
                <div>
                    <label className='text-[#442b20] text-lg font-bold' htmlFor="productName">Product Name</label> <br />
                    <input defaultValue={product_name} className='w-full py-2 px-4 border-2 border-[#442b20] rounded-md mt-2' type="text" name="productName" placeholder='Type Your Product Name' required />
                </div>

                <div className='flex gap-6 mt-4'>
                    <div className='flex-1'>
                        <label className='text-[#442b20] text-lg font-bold' htmlFor="productPrice">Product Price</label> <br />
                        <input defaultValue={product_price} className='w-full py-2 px-4 border-2 border-[#442b20] rounded-md mt-2' type="number" name="productPrice" placeholder='Enter Your Product Price' required />
                    </div>

                    <div className='flex-1'>
                        <label className='text-[#442b20] text-lg font-bold' htmlFor="category">
                            Category
                        </label>
                        <br />
                        <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value) }} className='w-full mt-2 border-2 border-[#442b20] px-4 py-2 rounded-md' required>
                            <option value="">Select Category</option>
                            <option value="jewelry">Jewelry</option>
                            <option value="homedecor">Home Decor</option>
                            <option value="clothing">Clothing</option>
                            <option value="artcraft">Arts & Craft</option>
                            <option value="beauty">Beauty & Personal Care</option>
                            <option value="toysgames">Toys & Games</option>
                            <option value="kitchen">Kitchen & Dining</option>
                            <option value="stationary">Stationery & Paper Goods</option>
                            <option value="petsupplies">Pet Supplies</option>
                            <option value="furniture">Furniture & Furnishings</option>
                        </select>

                    </div>
                </div>

                <div className='mt-4'>
                    <label className='text-[#442b20] text-lg font-bold' htmlFor="productShortDescription">Product Short Description</label> <br />
                    <input defaultValue={product_short_description} className='w-full py-2 px-4 border-2 border-[#442b20] rounded-md mt-2' type="text" name="productShortDescription" placeholder='Write short Detail about your Product' required />
                </div>

                <div className='mt-4'>
                    <label className='text-[#442b20] text-lg font-bold' htmlFor="productBroadDescription">Product Broad Description</label> <br />
                    <textarea defaultValue={product_broad_description} className='w-full py-2 px-4 border-2 border-[#442b20] rounded-md mt-2' name="productBroadDescription" id="productBroadDescription" cols="30" rows="3" placeholder='Write a broad Detail about your Product' required></textarea>
                </div>

                <div className='flex gap-6 mt-4'>
                    <div className='flex-1'>
                        <label className='text-[#442b20] text-lg font-bold' htmlFor="location">
                            Location
                        </label>
                        <br />
                        <select value={selectedLocation} onChange={(e) => { setSelectedLocation(e.target.value) }} className='w-full mt-2 border-2 border-[#442b20] px-4 py-2 rounded-md' required>
                            <option value="">Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barishal">Barishal</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Mymensingh">Mymensingh</option>
                        </select>
                    </div>
                </div>

                <button type='submit' className="lg:inline-block cursor-pointer overflow-hidden relative z-100 border border-[#442b20] group px-6 py-3 mt-8 w-full rounded-[50px] font-bold">
                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-xl duration-500">Update Product</span>
                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
            </form>
        </div>
    );
};

export default UpdateProducts;