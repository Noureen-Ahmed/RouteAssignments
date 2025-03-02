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
            <div className='p-15'>
                <div className="row justify-center gap-5 items-center ">
                    {images.map((image, index) =>
                        <div key={index} className=" group lg:w-1/3 md:w-1/2 sm:w-full  relative cursor-pointer">
                            <img className='w-full rounded-md ' src={image} alt=""
                                onClick={(e) => {
                                    setImgSource(e.target.getAttribute("src"))
                                    setOpen(true)
                                }}
                            />
                            <div className="absolute inset-0 bg-[#1ABC9C] bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-md">
                                
                                    <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {open &&
                <div className="fixed top-0 left-0 inset-0 center z-40">
                    <div className='bg-sky-600 opacity-30 absolute w-full h-full' onClick={() => { setOpen(false) }}></div>
                    <img src={imgSource} className='w-[85%]  md:w-1/2 lg:w-1/3 z-30' alt="" />
                </div>
            }
        </>
    )
}

