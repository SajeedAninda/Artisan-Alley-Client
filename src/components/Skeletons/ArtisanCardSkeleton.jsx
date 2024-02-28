import React from 'react';

const ArtisanCardSkeleton = () => {
    let mappingArray = [1, 2, 3, 4, 5, 6]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 pb-12'>
            {mappingArray?.map(artisans => (
                <div className='bg-gray-300 h-[400px] rounded-lg'>
                    <div className='w-44 object-cover aspect-square text-5xl rounded-full p-2 mx-auto bg-gray-400 animate-pulse m-8' alt=""> </div>
                    <p
                        className="cardtxt font-bold text-2xl text-white tracking-wider bg-gray-400 w-[60%] h-[20px] mx-auto animate-pulse"
                    >
                    </p>
                    <p className="blueberry font-semibold text-white text-lg text-center bg-gray-400 w-[60%] mx-auto h-[20px] mt-4 animate-pulse">
                    </p>
                    <div className="ordernow flex flex-row justify-center items-center w-full mt-6">
                        <div
                            className="btun4 lg:inline-flex items-center gap-3 bg-gray-400 w-[40%] h-[20px] animate-pulse py-2 px-4 text-sm font-semibold rounded-full butn"
                        >
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArtisanCardSkeleton;