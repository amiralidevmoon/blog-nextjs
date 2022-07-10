import React, {useState} from "react";

import HeaderAuthButtons from "./header-auth-buttons";
import NavItemLink from "./nav-item-link";
import Logo from "./logo";
import BurgerMenu from "./burger-menu";
 
const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <nav className="bg-white border-gray-200 mt-3 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 top-10 grid place-items-center">
            <div className="container flex flex-wrap justify-between items-center mx-auto relative border p-3 rounded-md border-blue-900">
                <span className='flex gap-8'>
                    <Logo label="Amir Ali Taheri"/>
                    <span className='flex mt-1'>
                        <HeaderAuthButtons/>
                    </span>
                </span>
                <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>

                <div className={
                    burgerMenu
                        ? "w-full md:block md:w-auto transition duration-200"
                        : "hidden w-full md:block md:w-auto"
                }>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium px-3 transition duration-200">
                        <NavItemLink/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Header);