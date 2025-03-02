import React from "react";
import { useLocation } from "react-router-dom";
export default function Heading({ text }) {
    const { pathname } = useLocation();

    return (
        <>
            <h1 className={`${pathname==='/'|| pathname==='/about'?'text-white':'text-black'} uppercase text-5xl font-bold mt-4`}> {text}</h1>
        </>
    )
}