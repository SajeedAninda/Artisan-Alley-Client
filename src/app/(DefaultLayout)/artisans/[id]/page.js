import ArtisanDetails from '@/components/ArtisanDetails/ArtisanDetails';
import PrivateRoute from '@/components/Authentication/PrivateRoute/PrivateRoute';
import React from 'react';

const ArtisanDetailsPage = ({ params }) => {
    return (
        <div className='w-[90%] mx-auto py-8'>
            <PrivateRoute>
                <ArtisanDetails params={params}></ArtisanDetails>
            </PrivateRoute>
        </div>
    );
};

export default ArtisanDetailsPage;