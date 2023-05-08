import { useState } from 'react';
import logo from '../assets/main_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('');
    const [showNav, setShowNav] = useState(false);

    const handleLinkClick = (id) => {
        if (id !== 'home') {
            setActiveLink(id);
        }
        setShowNav(false);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div
                    className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
                >
                    <a href="/" className="navbar-brand">
                        <img src={logo} alt="logo" width="60" height="" className="d-inline-block align-text-top" />
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} className="fa-2x" />
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul
                            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <li className='nav-link'>
                                <a
                                    href="/"
                                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-white"
                                >Home</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/#about"
                                    className="block py-2 pl-3 pr-4 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >About</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/#partners"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >Partners</a>
                            </li>
                            <li className='nav-link'>
                                <Link
                                    to="/jobList"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >Vacancy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}