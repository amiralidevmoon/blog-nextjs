import React from 'react';
import Header from "../header";
import Sidebar from "../sidebar";

function AdminLayout({children}) {
    return (
        <>
            <Header/>
            <div className='dark:text-gray-400 text-gray-700 grid place-items-center'>
                <div className='flex'>
                    {children}
                    <Sidebar/>
                </div>
            </div>
        </>
    );
}

export default AdminLayout;