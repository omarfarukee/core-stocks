import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBer from '../Shared/Header/NavBer';

const Main = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;