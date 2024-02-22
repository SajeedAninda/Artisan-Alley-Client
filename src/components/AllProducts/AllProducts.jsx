"use client"
import React, { useState } from 'react';
import { BsSearchHeart } from "react-icons/bs";
import { TbZoomReset } from "react-icons/tb";
import AllProductsCards from '../AllProductsCards/AllProductsCards';


const AllProducts = () => {
    let [searchValue, setSearchValue] = useState('');
    let [selectedCategory, setSelectedCategory] = useState("");
    let [selectedLocation, setSelectedLocation] = useState("");

    const handleResetFilters = () => {
        setSearchValue('');
        setSelectedCategory('');
        setSelectedLocation('');
        document.getElementById("categorySelect").value = "";
        document.getElementById("locationSelect").value = "";
    };

    console.log(searchValue, selectedCategory, selectedLocation);

    return (
        <div className='mt-6'>
            {/* SEARCH INPUT  */}
            <div className='relative'>
                <input
                    className='w-full py-3 px-6 border-2 border-[#442b20] rounded-lg' name='searchField' placeholder='Search By Product Name' type="text" value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className='absolute right-4 top-3'>
                    <BsSearchHeart className='text-2xl text-[#442b20] cursor-pointer' />
                </div>
            </div>

            <div className='mt-4 flex gap-6'>
                <div className='flex-1'>
                    <select onChange={(e) => { setSelectedCategory(e.target.value) }} className='w-full mt-2 border-2 border-[#442b20] px-4 py-2 rounded-md' id='categorySelect' required>
                        <option value="">Filter By Category</option>
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

                <div className='flex-1'>
                    <select onChange={(e) => { setSelectedLocation(e.target.value) }} className='w-full mt-2 border-2 border-[#442b20] px-4 py-2 rounded-md' id='locationSelect' required>
                        <option value="">Filter By Location</option>
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

            <div className='flex justify-center mt-4'>
                <button onClick={handleResetFilters} className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 rounded-lg">
                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500 flex gap-2 items-center">
                        <TbZoomReset className='2xl font-bold' />
                        Reset Filters
                    </span>
                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
            </div>

            <AllProductsCards></AllProductsCards>
        </div>
    );
};

export default AllProducts;
