import React from 'react';
import { Outlet } from 'react-router';

const Favoriute = () => {
    return (
        <div>
            <h1>this is fevoriuts </h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Favoriute;