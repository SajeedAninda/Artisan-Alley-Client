"use client";
import useAxiosInstance from "@/Hooks/useAxiosInstance";
import useProductsByArtisan from "@/Hooks/useProductsByArtisan";
import Image from "next/image";
import toast from "react-hot-toast";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";


const ArtisanMyProducts = () => {
    let axiosInstance = useAxiosInstance()
    let { products, refetch } = useProductsByArtisan();

    let handleDeleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once Deleted, you cannot revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#926d5c',
            cancelButtonColor: '#442b20',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/deleteProduct/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            console.log(res.data);
                            toast.success("Product Deleted Succesfully")
                        }
                    })
                    .catch(error => {
                        console.error("Error :", error);
                        toast.error('Error', 'Failed to delete Product');
                    });
            }
        });
    }


    return (
        <div className="w-[90%] mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                {
                    products?.map(product =>
                        <div className="card">
                            <div className="bg-white rounded-lg shadow-lg flex flex-col">
                                <div className="relative">
                                    <Image width={400} height={400} className="rounded-t-lg w-full h-[200px] object-cover" src={product?.imageUrl} alt="" />
                                    <div className="absolute top-2 right-2">
                                        <div onClick={() => handleDeleteProduct(product?._id)} className="p-3 rounded-full bg-red-500 cursor-pointer">
                                            <RiDeleteBin5Fill className="text-white font-bold text-3xl" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-b-lg">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{product?.product_name}</h5>
                                    <p className="mb-3 font-normal text-white">
                                        {product?.product_short_description}
                                    </p>
                                    <p className="mb-3 font-normal text-white">
                                        From <span className='font-semibold'>{product?.artisan_name}</span>
                                    </p>
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{product?.product_price}$ / Piece</h5>
                                    <button className="lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2 w-full">
                                        <span className="relative z-10 text-white group-hover:text-[#442b20] text-lg duration-500">View Details</span>
                                        <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                        <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ArtisanMyProducts;