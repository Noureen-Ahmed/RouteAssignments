import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
export default function Layout() {
    const {pathname} = useLocation();
    return (
        <>
            <Navbar />
            <div className={`${pathname === '/'||pathname === '/about'? 'bg-[#1ABC9C]':"bg-white"} min-h-dvh center pt-36`}>
                <div className="container mx-auto text-center">
                    <Outlet />

                </div>
            </div>
            <Footer />
        </>
    )
}