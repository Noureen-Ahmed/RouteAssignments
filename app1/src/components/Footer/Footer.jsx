/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Style from './Footer.module.css';
export default function Footer() {
    const [counter, setCounter] = useState();
    useEffect(() => { }, [])
    return (
        <>
            {/* <footer className='bg-[#2C3E50] text-center  text-white'>
                <div className=' container mx-auto p-10 ' >
                    <div className='center gap-10'>
                        <div>
                            <h2>LOCATION</h2>
                            <p>2215 John Daniel Drive</p>
                        </div>
                        <div>
                            <h2>AROUND THE WEB</h2>
                            <p></p>
                            cc
                        </div>
                        <div>
                            <h2>ABOUT FREELANCER</h2>
                            <p></p>
                            <span className='block'>Freelance is a free to use, licensed Bootstrap theme created by Route

                            </span>
                        </div>

                    </div>

                </div>
                <p>Copyright © Your Website 2021</p>

            </footer> */}
            <footer className="bg-[#2C3E50] text-white  text-center">
                <div className="container mx-auto p-10 flex flex-col md:flex-row justify-evenly items-center  ">
                    <div className="m-4 md:mb-0 ">
                        <h3 className="text-lg font-semibold">LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="mb-4 md:mb-0 text-center">
                        <h3 className="text-lg font-semibold">AROUND THE WEB</h3>
                        <div className="flex justify-center space-x-4 mt-2">
                                <i className='fa-brands fa-facebook mx-1 icon'></i>
                                <i className='fa-brands fa-twitter mx-1 icon'></i>
                                <i className='fa-brands fa-linkedin mx-1 icon'></i>
                                <i className=' fa-solid fa-globe  mx-1 icon'></i>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                <div className=" p-4 bg-[#1A252F]">

                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>
            

        </>
    )
}

