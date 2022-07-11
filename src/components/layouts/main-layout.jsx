import React from 'react';
import Header from "../app/header";
import PropTypes from "prop-types";

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

MainLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default React.memo(MainLayout);