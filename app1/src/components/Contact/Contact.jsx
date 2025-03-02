/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Style from './Contact.module.css';
import Heading from '../Heading/Heading';
export default function Contact() {
    const [counter, setCounter] = useState();
    useEffect(() => { }, [])
    return (
        <>
            <div >
                <Heading text={'Contact Component'} />

            </div>
        </>
    )
}

