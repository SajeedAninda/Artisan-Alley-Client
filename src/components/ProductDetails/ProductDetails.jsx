"use client"
import useAuth from '@/Hooks/useAuth';
import useAxiosInstance from '@/Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Fragment, useState } from 'react'
import toast from 'react-hot-toast';
import { Dialog, Transition } from '@headlessui/react'
import useCurrentUserData from '@/Hooks/useCurrentUserData';

const ProductDetails = ({ params }) => {
    let axiosInstance = useAxiosInstance();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    let [isOpen, setIsOpen] = useState(false);
    let { userData, isUserLoading } = useCurrentUserData()

    const { data: productDetails, isLoading: isProductLoading } = useQuery({
        queryKey: ['productDetails', params],
        queryFn: async () => {
            const response = await axiosInstance.get(`/productDetails/${params.id}`);
            return response.data;
        },
        enabled: !!params,
    });

    let _id, product_name, product_price, product_category, product_short_description, product_broad_description, product_location, imageUrl, addedTime, artisan_name, artisan_email;
    if (productDetails) {
        ({ _id, product_name, product_price, product_category, product_short_description, product_broad_description, product_location, imageUrl, addedTime, artisan_name, artisan_email } = productDetails);
    }

    let formatDateString = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    let productId = _id;

    let favouritesData = { productId, product_name, product_price, product_category, product_short_description, product_broad_description, product_location, imageUrl, addedTime, artisan_name, artisan_email, currentUserEmail }

    let isCurrentUserArtisan = false;

    if (userData?.role === "artisan") {
        isCurrentUserArtisan = true;
    }


    let handleAddToFavourite = () => {
        let loadingToast = toast.loading('Adding to Favourites...');
        axiosInstance.post(`/favourites`, favouritesData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.dismiss(loadingToast);
                    toast.success("Added To Favourites. See from Profile");
                }
            })
            .catch(error => {
                toast.dismiss(loadingToast);
                console.error("Error adding Favourites:", error);
                if (error.response && error.response.status === 400) {
                    toast.error("This product is already added as Favourite");
                } else {
                    toast.error("Failed to add favourite. Please try again later.");
                }
            });
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    let orderTime = new Date();

    let handleOrderProduct = (e) => {
        e.preventDefault();
        let client_name = loggedInUser?.displayName;
        let client_email = loggedInUser?.email;
        let client_phone = e.target.client_phone_number.value;
        let shipping_address = e.target.client_shipping_address.value;
        let order_quantity = e.target.quantity.value;

        if (order_quantity <= 0 || isNaN(order_quantity)) {
            toast.error("Invalid order quantity");
            return;
        }

        let orderDetails = { client_name, client_email, client_phone, shipping_address, order_quantity, productId, product_name, product_price, product_category, product_short_description, product_broad_description, product_location, imageUrl, artisan_name, artisan_email, orderTime };

        let loadingToast = toast.loading('Confirming Order...');
        axiosInstance.post(`/addOrder`, orderDetails)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.dismiss(loadingToast);
                    toast.success("Order Confirmed");
                    closeModal()
                }
            })
            .catch(error => {
                toast.dismiss(loadingToast);
                console.error("Error making order:", error);
            });
    }

    return (
        <div className='py-8 w-[90%] mx-auto'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex-1'>
                    <Image width={400} height={400} className="rounded-lg w-full h-[400px] border-8 border-[#442b20] object-cover" src={imageUrl} alt="" />

                    <div className='space-y-3 mt-3'>
                        <button onClick={openModal} className={`lg:inline-block font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-full ${isCurrentUserArtisan ? 'bg-gray-400 cursor-not-allowed' : 'cursor-pointer'}`} disabled={isCurrentUserArtisan}>
                            <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Order Now</span>
                            <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                            <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                        </button>

                        <button
                            onClick={handleAddToFavourite}
                            className={`lg:inline-block font-semibold overflow-hidden relative z-100 border border-[#442b20] group px-6 py-2 w-full ${isCurrentUserArtisan ? 'bg-gray-300 cursor-not-allowed' : 'cursor-pointer'}`}
                            disabled={isCurrentUserArtisan}
                        >
                            <span className="relative z-10 text-[#442b20] group-hover:text-white text-lg duration-500">Add to Favourites</span>
                            <span className="absolute w-full h-full bg-[#442b20] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                            <span className="absolute w-full h-full bg-[#442b20] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                        </button>
                    </div>
                </div>

                <div className='flex-1'>
                    <div>
                        <h2 className='text-4xl font-bold text-[#442b20]'>{product_name}</h2>
                        <h2 className='text-2xl font-bold text-[#442b20] mt-3'>{product_short_description}</h2>
                        <h2 className='text-lg font-semibold text-[#442b20] mt-3'>{product_broad_description}</h2>
                        <h2 className='text-3xl font-bold text-[#442b20] mt-3'>Product Price: {product_price}$ / Piece</h2>
                        <h2 className='text-2xl font-semibold text-[#442b20] mt-3'>Product Location: {product_location}</h2>
                        <h2 className='text-lg font-semibold text-[#442b20] mt-3 capitalize'>Product ID:  {_id && _id.slice(-9)}</h2>
                        <h2 className='text-lg font-semibold text-[#442b20] mt-3'>Product Added on {addedTime && formatDateString(addedTime)}</h2>
                        <div className='bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-md p-4 w-full text-center mt-3'>
                            <h2 className='text-xl font-bold text-white'>Crafted By {artisan_name}</h2>
                            <h2 className='text-lg font-bold text-white'>{artisan_email}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <form onSubmit={handleOrderProduct} className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gradient-to-r from-[#442b20] to-[#926d5c] p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl space-y-3 text-center font-bold leading-6 text-white"
                                    >
                                        <h3>{product_name}</h3>
                                        <h3>Price: {product_price}$ / Piece</h3>

                                    </Dialog.Title>
                                    <div className="mt-5 flex flex-row gap-3 items-center justify-center">
                                        <p className="text-lg text-white font-bold">
                                            Name:
                                        </p>
                                        <p className="text-lg text-white font-bold">
                                            {loggedInUser?.displayName}
                                        </p>
                                    </div>

                                    <div className="mt-3 flex flex-row gap-3 items-center justify-center">
                                        <p className="text-lg text-white font-bold">
                                            Email:
                                        </p>
                                        <p className="text-lg text-white font-bold">
                                            {loggedInUser?.email}
                                        </p>
                                    </div>

                                    <div className="mt-3 flex flex-row gap-3 items-center justify-center">
                                        <p className="text-base md:text-lg text-white font-bold w-[20%]">
                                            Quantity:
                                        </p>
                                        <input type="number" name='quantity' className='py-2 rounded-md px-4 w-[80%]' placeholder='Quantity of Items You want to order' required />
                                    </div>

                                    <div className="mt-3 flex flex-row gap-3 items-center justify-center">
                                        <p className="text-base md:text-lg text-white font-bold w-[20%]">
                                            Phone No:
                                        </p>
                                        <input name='client_phone_number' type="tel" className='py-2 rounded-md px-4 w-[80%]' placeholder='Enter Your Phone Number' required />
                                    </div>

                                    <div className="mt-3 flex flex-row gap-3 items-center justify-center">
                                        <p className="text-base md:text-lg text-white font-bold w-[20%]">
                                            Shipping Address:
                                        </p>
                                        <input name='client_shipping_address' type="text" className='py-2 rounded-md px-4 w-[80%]' placeholder='Enter Your Address' required />
                                    </div>


                                    <div className="mt-8 flex justify-center items-center gap-6">
                                        <button type='submit' className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2">
                                            <span className="relative z-10 text-white group-hover:text-[#926d5c] text-lg duration-500">Make Order</span>
                                            <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                            <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                        </button>

                                        <button type="button" onClick={closeModal} className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2">
                                            <span className="relative z-10 text-white group-hover:text-[#926d5c] text-lg duration-500">Cancel</span>
                                            <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                            <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </form>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ProductDetails;