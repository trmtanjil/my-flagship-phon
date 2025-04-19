import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const MainLayOuts = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOuts;