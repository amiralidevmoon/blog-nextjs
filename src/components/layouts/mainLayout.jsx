import React from 'react';
import Header from "../header";

function MainLayout({children}) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}

export default MainLayout;