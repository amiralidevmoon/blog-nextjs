import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {
    const [burgerMenu, setburgerMenu] = useState(false);

    const router = useRouter();
    const currentRoute = router.pathname;

    const defaultClassLink = 'block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    const activeClassLink = 'block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-cyan-300 md:p-0 text-gray-700 dark:text-gray-400';

    return (
        <nav className="bg-white border-gray-200 mt-3 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 top-10 grid place-items-center">
            <div className="container flex flex-wrap justify-between items-center mx-auto relative border p-3 rounded-md border-blue-900">
                <span className='flex gap-8'>
                  <a className="flex">
                    <svg
                        className="mr-3 h-10"
                        viewBox="0 0 52 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
                            fill="#76A9FA"
                        ></path>
                        <path
                            d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
                            fill="#A4CAFE"
                        ></path>
                        <path
                            d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
                            fill="#1C64F2"
                        ></path>
                    </svg>
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            Amir Ali Taheri Blog
          </span>
                </a>
                <span className='flex mt-1'>
                    <Link href='/admin-panel' passHref>
                        <button
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span
                              className="relative px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Admin Panel
                          </span>
                        </button>
                    </Link>
                    <Link href='/dashboard' passHref>
                        <button
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                      <span
                          className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Profile
                      </span>
                    </button>
                    </Link>
                </span>
                </span>
                <button
                    onClick={() => setburgerMenu(!burgerMenu)}
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <svg
                        className="hidden w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className={
                        burgerMenu
                            ? "w-full md:block md:w-auto"
                            : "hidden w-full md:block md:w-auto"
                    }
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium px-3">
                        <li>
                            <Link href='/src/pages'>
                                <a className={currentRoute === "/"
                                    ? activeClassLink
                                    : defaultClassLink
                                }>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/articles'>
                                <a className={currentRoute === "/articles"
                                    ? activeClassLink
                                    : defaultClassLink
                                }>
                                    Articles
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/src/pages/about-us'>
                                <a className={currentRoute === "/about-us"
                                    ? activeClassLink
                                    : defaultClassLink
                                }>
                                    About us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/src/pages/contact-us'>
                                <a className={currentRoute === "/contact-us"
                                    ? activeClassLink
                                    : defaultClassLink
                                }>
                                    Contact us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/auth/login'>
                                <a className={currentRoute === "/auth/login"
                                    ? activeClassLink
                                    : defaultClassLink
                                }>
                                    Login
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/auth/register'>
                                <a className={currentRoute === "/auth/register"
                                    ? activeClassLink
                                    : defaultClassLink
                                }>
                                    Register
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Header);