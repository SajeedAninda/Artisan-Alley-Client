import Footer from '@/components/Footer/Footer';
import Header from '@/components/header/Header';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Toaster/>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default DefaultLayout;