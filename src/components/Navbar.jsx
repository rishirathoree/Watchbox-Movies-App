import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='w-full z-50 flex items-center justify-between fixed top-0 right-0 p-8'>
        <div>
            <Link to="/">
                <p className='font-light uppercase leading-none text-xl text-red-500'>Watchbox</p>
                </Link>
        </div>
        <div className='flex items-center gap-4'>
            <Link to="/login">
            <p className='font-semibold text-white uppercase text-xsm p-2 leading-none text-xl'>Sign In</p>
            </Link>
            <Link to="/login">
            <p className='font-semibold text-white uppercase text-xsm p-2 leading-none text-xl bg-red-500 bg-opacity-70'>Sign Up</p>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Navbar