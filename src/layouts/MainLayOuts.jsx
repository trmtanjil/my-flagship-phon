import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayOuts = () => {
    return (
        <div>
           <Navbar></Navbar>
          <div className='min-h-[calc(100vh-116px)]'>
         <div className='max-w-screen-2xl mx-auto px-8 md:px12 lg:px-16 xl:px-24'>
         <Outlet></Outlet>
         </div>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOuts;