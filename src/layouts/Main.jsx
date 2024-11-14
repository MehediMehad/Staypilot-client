import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <Navbar />
            <div className="pt-24 min-h-[calc(100vh-68px)]">
                <Outlet />
            </div>
            {/* Footer */}
        </div>
    );
};

export default Main;