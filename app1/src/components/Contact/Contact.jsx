/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Style from './Contact.module.css';
import Heading from '../Heading/Heading';
export default function Contact() {
    const [counter, setCounter] = useState();
    useEffect(() => { }, [])
    return (
        <>
                <Heading text={'Contact Component'} />

            <div className="max-w-lg mx-auto p-6 text-left">
                <form>
                    <div className="mb-10">
                        <input
                            type="text"
                            placeholder="userName"
                            className="w-full border-b border-gray-300 focus:outline-none"
                        />
                    </div>
                    <div className="mb-10">
                        <input
                            type="number"
                            placeholder="userAge"
                            className="w-full border-b border-gray-300 focus:outline-none"
                        />
                    </div>
                    <div className="mb-10">
                        <input
                            type="email"
                            placeholder="userEmail"
                            className="w-full border-b border-gray-300 focus:outline-none"
                        />
                    </div>
                    <div className="mb-10">
                        <input
                            type="password"
                            placeholder="userPassword"
                            className="w-full border-b border-gray-300 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-teal-500 text-white py-2 px-4 rounded-md "
                    >
                        send Message
                    </button>
                </form>
            </div>
        </>
    )
}

