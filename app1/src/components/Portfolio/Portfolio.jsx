import React, { useEffect, useState } from 'react';
import Style from './Portfolio.module.css';
import Heading from '../Heading/Heading';
const images = Object.values(import.meta.glob("../../assets/images/*.{jpg,jpeg,png}", {
    as: 'url',
    eager: true,
}));
export default function Portfolio() {
    const [open, setOpen] = useState(false);
    const [imgSource, setImgSource] = useState('');
    useEffect(() => { }, []);

    return (
        <>
            <Heading text={'Portfolio Component'} />
            <div >
                <div className="row justify-center items-center ">
                    {images.map((image, index) =>
                        <div key={index} className="lg:w-1/3 md:w-1/2 sm:w-full p-5">
                            <img className='w-full rounded-md' src={image} alt=""
                                onClick={(e) => {
                                    setImgSource(e.target.getAttribute("src"))
                                    setOpen(true)
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
            {open &&
                <div className="fixed  top-0 left-0 inset-0 center z-40">
                    <div className='  bg-sky-600 opacity-30 absolute w-full h-full ' onClick={() => { setOpen(false) }}>
                    </div>
                    <img src={imgSource} className='sm:w-full md:w-1/2 lg:w-1/3 z-30' alt="" />
                </div>
            }
        </>
    )
}

