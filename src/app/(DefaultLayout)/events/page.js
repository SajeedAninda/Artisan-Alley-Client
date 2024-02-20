import PreviousEvents from '@/components/PreviousEvents/PreviousEvents';
import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents';
import React from 'react';

const Events = () => {
    return (
        <div>
            <UpcomingEvents></UpcomingEvents>
            <PreviousEvents></PreviousEvents>
        </div>
    );
};

export default Events;