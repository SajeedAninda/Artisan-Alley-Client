import OrderedProductForUser from '@/components/OrderedProductForUser/OrderedProductForUser';
import React from 'react';

const UserBookings = () => {
    return (
        <div className='w-[90%] mx-auto py-8'>
            <div className='space-y-2'>
                <h1 className='text-[#442b20] text-4xl text-center font-bold'>My Bookings</h1>
                <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>See The Details of the Orders that you have made</p>
            </div>

            <>
            <OrderedProductForUser></OrderedProductForUser>
            </>
        </div>
    );
};

export default UserBookings;