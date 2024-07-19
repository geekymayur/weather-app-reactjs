import React from 'react'
import mylogo from "../../assets/umbrella.webp"
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <>
            <div className='bg-gray-950 p-3 h-dvh text-center align-middle content-center w-full'>
                <img className='m-auto' src={mylogo} alt="logo" style={{ width: '50%' }} />
                <h3 className='text-white text-3xl text-center mt-4'>Breeze</h3>
                <p className='text-center text-white mt-2'>A weather app by mayur</p>
                <Link to='/home'>
                    <div className='bg-blue-600 p-5 rounded-full w-min m-auto mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width='20px' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Welcome