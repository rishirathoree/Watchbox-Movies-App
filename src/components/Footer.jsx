import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='flex p-3 border-t-[.1px] border-white border-opacity-10 items-center justify-center'>
    <Link to="/">
                <p className='font-light p-1 uppercase leading-none text-xsm text-red-500'>Watchbox</p>
                </Link>
    </div>
    </>
  )
}

export default Footer