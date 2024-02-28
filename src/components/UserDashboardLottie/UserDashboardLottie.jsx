"use client"
import React from 'react';
import Lottie from 'lottie-react';
import userLottie from '@/assets/LottieFiles/userLottie.json';

const UserDashboardLottie = () => {
    return (
        <div>
            <Lottie animationData={userLottie} loop={true} />
        </div>
    );
};

export default UserDashboardLottie;