/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Style from './Home.module.css';
import Heading from '../Heading/Heading';
import avatar from '../../assets/avatar.svg';
export default function Home() {
    useEffect(() => { }, [])
    return (
        <>
            <div >
                <div className="w-1/4 mx-auto">
                <img src={avatar} alt="" />
                </div>
                <Heading  text={'Start Framework'} />
                <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </>
    )
}

