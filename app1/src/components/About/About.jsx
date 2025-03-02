/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Style from './About.module.css';
import Heading from '../Heading/Heading';
export default function About() {
    const [counter, setCounter] = useState();
    useEffect(() => { }, [])
    return (
        <>
                <Heading text={'About Component'} />
            <div className='text-white container flex justify-center items-center mx-auto px-10' >
                <div className=" flex-col center md:flex-row gap-4 text-lg text-left leading-relaxed max-w-lg md:max-w-5xl m-4 ">
                        <p className='w-full md:w-1/2'>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        <p className="w-full md:w-1/2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                </div>
            </div>

        </>
    )

}