"use client"
import React from 'react';
import Lottie from 'lottie-react';
import artisanLottie from '@/assets/LottieFiles/artisanLottie.json';

const ArtisanDashboardLottie = () => {
    return (
        <div>
            <Lottie animationData={artisanLottie} loop={true} />
        </div>
    );
};

export default ArtisanDashboardLottie;