import React from 'react';
import Banner from '../Banner/Banner';
import WhatIsArtisan from '../What is Artisan/WhatIsArtisan';
import WorkingProcess from '../Working Process/WorkingProcess';
import LocalArtisans from '../Local Artisans/LocalArtisans';
import RecentProducts from '../Recent Products/RecentProducts';
import Contact from '../Contact/Contact';
import PeopleSays from '../People Says/PeopleSays';
import Newsletter from '../Newsletter/Newsletter';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <WhatIsArtisan></WhatIsArtisan>
            <WorkingProcess></WorkingProcess>
            <LocalArtisans></LocalArtisans>
            <RecentProducts></RecentProducts>
            <Contact></Contact>
            <PeopleSays></PeopleSays>
            <Newsletter></Newsletter>
        </>
    );
};

export default Homepage;