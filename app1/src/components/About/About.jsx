/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Style from './About.module.css';
import Heading from '../Heading/Heading';
export default function About() {
    const [counter, setCounter] = useState();
    useEffect(()=>{},[])
    return (
        <>
            <div >
                <Heading text={ 'About Component'} />
            </div>
        </>
    )
}

