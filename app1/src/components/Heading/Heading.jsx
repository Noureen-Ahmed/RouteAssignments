import React from "react";
import { useLocation } from "react-router-dom";
import'../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
const StartFrameworkHeading = ({ text }) => {
    const { pathname } = useLocation();
    const textColor = pathname === '/' || pathname === '/about' ? 'text-white' : 'text-[#2C3E50]';
    const borderColor = pathname === '/' || pathname === '/about' ? 'border-white' : 'border-[#2C3E50]';

    return (
        <div className="font-bold text-2xl px-6 rounded-md flex flex-col items-center justify-center">
            <h1 className={`${textColor} uppercase sm:text-4xl md:text-5xl `}>{text}</h1>
            <div className="flex items-center gap-2 mt-2">
                <div className={`w-16 border-t-4 ${borderColor}`}></div>
                <span className={`${textColor} text-2xl `}>★</span>
                <div className={`w-16 border-t-4 ${borderColor}`}></div>
            </div>
        </div>
    );
};

export default StartFrameworkHeading;
