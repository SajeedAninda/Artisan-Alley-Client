import React from 'react';
import getPreviousEvents from '../../../lib/getPreviousEvents';
import Image from 'next/image';

const PreviousEvents = async() => {
    let previousEvents = await getPreviousEvents();


    let formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        let dayOrdinal;
        if (day % 10 === 1 && day !== 11) {
            dayOrdinal = day + "st";
        } else if (day % 10 === 2 && day !== 12) {
            dayOrdinal = day + "nd";
        } else if (day % 10 === 3 && day !== 13) {
            dayOrdinal = day + "rd";
        } else {
            dayOrdinal = day + "th";
        }
        const options = { month: "short", year: "numeric" };
        const formattedDate = dateObj.toLocaleDateString("en-US", options);
        return `${dayOrdinal} ${formattedDate}`;
    };
    

    return (
        <div>
            <div className='w-[90%] mx-auto pb-12'>
                <div className='space-y-2'>
                    <h1 className='text-[#442b20] text-4xl text-center font-bold'>Previous Events</h1>
                    <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>Explore the list of our past events and discover the experiences we've shared together.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                    {
                        previousEvents?.map(event =>
                            <div>
                                <div className='relative'>
                                    <Image className='object-cover w-full h-[250px] rounded-md' width={600} height={400} src={event?.image_url} alt='upcoming event image'></Image>

                                    <div className='absolute top-3 right-3 p-2 flex justify-center items-center text-center w-[60px] h-[80px] text-md font-bold bg-gradient-to-r from-white to-amber-700 text-[#442b20]'>
                                    {formatDate(event?.event_date)}
                                    </div>
                                </div>


                                <div>
                                    <h2 className='text-[#442b20] font-bold text-2xl mt-2'>{event?.event_name}</h2>
                                    <h2 className='text-[#442b20] font-bold text-md mt-2'>{event?.event_detail}</h2>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PreviousEvents;