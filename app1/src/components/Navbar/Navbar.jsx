import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const [scroll, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Main Navbar */}
            <nav
                className={`${scroll ? 'py-5' : 'py-8'
                    } transition-[padding] duration-500 fixed top-0 left-0 right-0 z-50 bg-[#2C3E50] text-white uppercase text-md font-bold p-30 `}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <h2>
                        <Link className="text-3xl" to="/">Start Framework</Link>
                    </h2>

                    {/* Custom Toggle Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden flex items-center justify-center w-12 h-10  rounded-2xl focus:ring-2 focus:ring-white"
                    >
                        <div className="flex flex-col space-y-1">
                            <span className="block w-6 h-0.5 bg-white rounded"></span>
                            <span className="block w-6 h-0.5 bg-white rounded"></span>
                            <span className="block w-6 h-0.5 bg-white rounded"></span>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex gap-10">
                        <li>
                            <NavLink to="/about" activeClassName="text-gray-400">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" activeClassName="text-gray-400">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="text-gray-400">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden bg-[#2C3E50] p-4`}>
                    <ul className="flex flex-col gap-y-4">
                        <li>
                            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block py-2">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" onClick={() => setMenuOpen(false)} className="block py-2">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block py-2">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
