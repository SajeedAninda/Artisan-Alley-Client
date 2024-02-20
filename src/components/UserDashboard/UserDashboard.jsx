import React from 'react';
import ArtisanDashboardLottie from '../ArtisanDashboardLottie/ArtisanDashboardLottie';

const UserDashboard = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className='flex flex-col lg:flex-row my-12 md:my-6 lg:my-2 justify-center items-center'>
                <div className='flex-1'>
                    <h1 className='text-7xl md:text-8xl lg:text-9xl font-bold'><span className='text-[#442b20]'>User</span> <br /> <span className='text-[#926d5c]'>Dashboard</span> <br /></h1>
                    <h2 className='text-[#442b20] text-5xl font-bold'>Control your Bookings and Bookmarks</h2>
                </div>

                <div className='flex-1'>
                    <ArtisanDashboardLottie></ArtisanDashboardLottie>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;