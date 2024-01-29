import React from 'react';
import Image from 'next/image';
import earring from "@/assets/products/earring.webp"
import vase from "@/assets/products/vase.jpg"
import bag from "@/assets/products/bag.jpg"
import table from "@/assets/products/table.jpg"

const RecentProducts = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <div className='text-center space-y-6 pt-10'>
                <h1 className='text-[#442b20] font-bold text-4xl  md:text-5xl'>Most Recent <span className='text-[#926d5c] underline hover:text-[#442b20] cursor-pointer'>Products</span></h1>
                <h3 className='text-[#442b20] font-semibold text-xl mt-3 w-[80%] mx-auto'>Discover the Latest Additions - Unveiling Our Most Recent Artisanal Creations</h3>
            </div>

            <div className='w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                    <div className="card">
                        <div className="bg-whiterounded-lg shadow-lg flex flex-col ">
                            <Image w={400} h={400} className="rounded-t-lg w-full h-[200px] object-cover" src={table} alt="" />
                            <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-b-lg">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">Handcrafted Wooden Coffee Table</h5>
                                <p className="mb-3 font-normal text-white">
                                    Elegantly designed coffee table made from high-quality, sustainable wood
                                </p>
                                <p className="mb-3 font-normal text-white">
                                    From <span className='font-semibold'>John Woodsmith</span>
                                </p>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">200$ / Piece</h5>
                                <button className="hidden lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2 w-full">
                                    <span className="relative z-10 text-white group-hover:text-[#442b20] text-lg duration-500">View Details</span>
                                    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                    <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="bg-whiterounded-lg shadow-lg flex flex-col ">
                            <Image w={400} h={400} className="rounded-t-lg w-full h-[200px] object-cover" src={bag} alt="" />
                            <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-b-lg">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">Stylish Artisan Leather Backpack</h5>
                                <p className="mb-3 font-normal text-white">
                                    Stylish and durable leather backpack, perfect for daily use or weekend trips
                                </p>
                                <p className="mb-3 font-normal text-white">
                                    From <span className='font-semibold'>Maria Leathercraft</span>
                                </p>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">140$ / Piece</h5>
                                <button className="hidden lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2 w-full">
                                    <span className="relative z-10 text-white group-hover:text-[#442b20] text-lg duration-500">View Details</span>
                                    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                    <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="bg-whiterounded-lg shadow-lg flex flex-col ">
                            <Image w={400} h={400} className="rounded-t-lg w-full h-[200px] object-cover" src={vase} alt="" />
                            <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-b-lg">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">Hand-Painted Ceramic Vase Set</h5>
                                <p className="mb-3 font-normal text-white">
                                    Set of two beautifully hand-painted ceramic vases to add charm to your home decor.
                                </p>
                                <p className="mb-3 font-normal text-white">
                                    From <span className='font-semibold'>Sophie Ceramics</span>
                                </p>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">260$ / Piece</h5>
                                <button className="hidden lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2 w-full">
                                    <span className="relative z-10 text-white group-hover:text-[#442b20] text-lg duration-500">View Details</span>
                                    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                    <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="bg-whiterounded-lg shadow-lg flex flex-col ">
                            <Image w={400} h={400} className="rounded-t-lg w-full h-[200px] object-cover" src={earring} alt="" />
                            <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-b-lg">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">Silver Crafter Filigree Earrings</h5>
                                <p className="mb-3 font-normal text-white">
                                    Intricately crafted silver filigree earrings, a timeless addition to your jewelry collection
                                </p>
                                <p className="mb-3 font-normal text-white">
                                    From <span className='font-semibold'>Carlos Silversmith</span>
                                </p>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">50$ / Piece</h5>
                                <button className="hidden lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2 w-full">
                                    <span className="relative z-10 text-white group-hover:text-[#442b20] text-lg duration-500">View Details</span>
                                    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                    <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProducts;