import React from 'react';
import LocalArtisanCard from './LocalArtisanCard';


const LocalArtisans = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <div className='text-center space-y-6 pt-10'>
                <h1 className='text-[#442b20] font-bold text-4xl  md:text-5xl'>Explore Local <span className='text-[#926d5c] underline hover:text-[#442b20] cursor-pointer'>Artisans</span></h1>
                <h3 className='text-[#442b20] font-semibold text-xl mt-3 w-[80%] mx-auto'>Each card unveils the extraordinary talents of artisans in your community. Discover a visual tapestry of craftsmanship, as these curated cards showcase the diverse skills and unique stories behind every creation. </h3>
            </div>

            <LocalArtisanCard></LocalArtisanCard>
        </div>


    );
};

export default LocalArtisans;