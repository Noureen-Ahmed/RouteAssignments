import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Style from './Navbar.module.css';
export default function Navbar() {
    const [scroll, setScrolling] = useState(false);
    useEffect(() => { }, []);
    addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            setScrolling(true)
        } else {
            setScrolling(false)
        }
    });
    return (
        <>
            <nav className={`${scroll === false ?'py-8':'py-5'} transition-[padding] duration-500 fixed top-0 left-0 right-0 z-50 bg-[#2C3E50] items-center text-white uppercase text-md font-bold `}>
                <div className="container mx-auto  row justify-around ">
                <h2>
                    <Link className='text-3xl' to={''}>Start Framework</Link>
                </h2>
                    <ul className='center gap-x-10'>
                        <li ><NavLink  to={'/about'}>about </NavLink ></li>
                        <li ><NavLink  to={'/portfolio'}>portfolio </NavLink ></li>
                        <li ><NavLink  to={'/contact'}>contact </NavLink ></li >
                    </ul>
            </div>
            </nav>
            
        </>
    )
}

