"use client"
import React, { useState } from 'react';

const AddProductForm = () => {
    let [selectedCategory, setSelectedCategory] = useState("");
    let [selectedLocation, setSelectedLocation] = useState("");
    let [selectedImage, setSelectedImage] = useState(null);

    let handleImageChange = (e) => {
        let file = e.target.files[0];

        if (file) {
            if (file.type.startsWith('image/')) {
                setSelectedImage(file);
            } else {
                setSelectedImage(null);
                toast.error("Please upload a valid image")
            }
        }
    };

    return (
        <div className='w-[90%] mx-auto mt-4'>
            <form>
                <div>
                    <label className='text-[#442b20] text-lg font-bold' htmlFor="productName">Product Name</label> <br />
                    <input className='w-full py-2 px-4 border-2 border-[#442b20] rounded-md mt-2' type="text" name="productName" placeholder='Type Your Product Name' required />
                </div>

                <div className='flex gap-6 mt-4'>
                    <div className='flex-1'>
                        <label className='text-[#442b20] text-lg font-bold' htmlFor="productPrice">Product Price</label> <br />
                        <input className='w-full py-2 px-4 border-2 border-[#442b20] rounded-md mt-2' type="number" name="productPrice" placeholder='Enter Your Product Price' required />
                    </div>

                    <div className='flex-1'>
                        <label className='text-[#442b20] text-lg font-bold' htmlFor="category">
                            Category
                        </label>
                        <br />
                        <select onChange={(e) => { setSelectedCategory(e.target.value) }} className='w-full mt-2 border-2 border-[#442b20] px-4 py-2 rounded-md' required>
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
                    <input className='w-full py-2 px-4 border-2 border-[#442b20] rounded-md mt-2' type="text" name="productShortDescription" placeholder='Write short Detail about your Product' required />
                </div>

                <div className='mt-4'>
                    <label className='text-[#442b20] text-lg font-bold' htmlFor="productBroadtDescription">Product Broad Description</label> <br />
                    <textarea className='w-full py-2 px-4 border-2 border-[#442b20] rounded-md mt-2' name="productBroadtDescription" id="productBroadtDescription" cols="30" rows="3" placeholder='Write a broad Detail about your Product' required></textarea>
                </div>

                <div className='flex gap-6 mt-4'>
                    <div className='flex-1'>
                        <label className='text-[#442b20] text-lg font-bold' htmlFor="location">
                            Location
                        </label>
                        <br />
                        <select onChange={(e) => { setSelectedLocation(e.target.value) }} className='w-full mt-2 border-2 border-[#442b20] px-4 py-2 rounded-md' required>
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


                    <div className='bg-white w-full rounded-xl flex-1'>
                        <p className='text-[#442b20] text-lg font-bold'>Image: </p>
                        <div className='px-5 py-1 relative border-2 border-[#442b20] rounded-lg mt-1'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                        onChange={handleImageChange}
                                    />
                                    <div className='bg-[#442b20] text-white font-semibold cursor-pointer py-1 px-8 hover:bg-[#926d5c]  rounded-xl'>
                                        {selectedImage ? selectedImage.name : "Upload Picture"}
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button type='submit' className="lg:inline-block cursor-pointer overflow-hidden relative z-100 border border-[#442b20] group px-6 py-3 mt-8 w-full rounded-[50px] font-bold">
                    <span className="relative z-10 text-[#442b20] group-hover:text-white text-xl duration-500">Add Product</span>
                    <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;