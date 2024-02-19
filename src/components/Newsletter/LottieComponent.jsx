"use client"
import Lottie from 'lottie-react';
import newsletterLottie from "@/assets/LottieFiles/newsletterLottie.json"

const LottieComponent = () => {
    return (
        <div className="lottieDiv w-full lg:w-[40%]">
            <Lottie animationData={newsletterLottie} loop={true} />
        </div>
    );
};

export default LottieComponent;