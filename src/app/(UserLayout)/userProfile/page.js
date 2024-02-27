import UserRoute from '@/components/Authentication/UserRoute/UserRoute';
import UserDashboard from '@/components/UserDashboard/UserDashboard';
import UserHeader from '@/components/UserHeader/UserHeader';
import React from 'react';

const UserProfile = () => {
    return (
        <>
            <UserRoute>
                <UserDashboard></UserDashboard>
            </UserRoute>
        </>
    );
};

export default UserProfile;