import ArtisanDetails from '@/components/ArtisanDetails/ArtisanDetails';
import React from 'react';

const ArtisanDetailsPage = ({ params }) => {
    return (
        <div className='w-[90%] mx-auto py-8'>
            <ArtisanDetails params={params}></ArtisanDetails>
        </div>
    );
};

export default ArtisanDetailsPage;