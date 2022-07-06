import React from 'react';

import {BellIcon, MenuAlt2Icon} from "@heroicons/react/solid";
import PropTypes from "prop-types";

import ProfileDropdown from "./profile-dropdown";
import Search from "../ui/form/search";

function HeaderDashboard({userNavigation, setSidebarOpen, classNames}) {
    return (
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-gray-900 shadow">
            <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
            </button>
            <div className="flex-1 px-4 flex justify-between">
                <Search/>
                <div className="ml-4 flex items-center md:ml-6">
                    <button
                        type="button"
                        className="bg-gray-900 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>

                    <ProfileDropdown userNavigation={userNavigation} classNames={classNames}/>
                </div>
            </div>
        </div>
    );
}

HeaderDashboard.propTypes = {
    userNavigation: PropTypes.object,
    setSidebarOpen: PropTypes.func,
    classNames: PropTypes.string,
}

export default React.memo(HeaderDashboard);