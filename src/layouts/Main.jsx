import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* NavBar */}
            <div className="">
                <Outlet/>
            </div>
            {/* Footer */}
        </div>
    );
};

export default Main;