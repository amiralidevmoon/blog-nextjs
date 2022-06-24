import React from 'react';
import Header from "../header";

function MainLayout({children}) {
    return (
        <>
            <Header/>
            <div className='dark:text-gray-400 text-gray-700 grid place-items-center'>
                {children}
            </div>
        </>
    );
}

export default MainLayout;