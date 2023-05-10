import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useAuth } from '../Contexts/AuthProviderContext'
import 'boxicons/css/boxicons.min.css'
const Navbar = () => {
  const {user} = useAuth()
  const dispatch = useDispatch()
  return (
    <>
    <div className='w-full z-50 flex items-center justify-between fixed top-0 right-0 p-8'>
        <div>
            <Link to="/">
                <p className='font-light p-1 uppercase leading-none text-lg text-red-500'>Watchbox</p>
                </Link>
        </div>
        {user
      ? <>
      <div className='flex items-center gap-3'>
        <Link to="/account">
          <i className='bx bx-user p-1 border-white border rounded-full'></i></Link>
          <Link to="/searchpage">
          <i className='bx bx-search p-1 border-white border rounded-full'></i></Link>
      <div>
      </div>
      </div>
      </>  
      :
      <>
      <div className='flex items-center gap-4'>
            <Link to="/login">
            <p className='font-semibold text-white uppercase text-xsm p-2 leading-none text-xl'>Sign In</p>
            </Link>
            <Link to="/Signup">
            <p className='font-semibold text-white uppercase text-xsm p-2 leading-none text-xl bg-red-500 bg-opacity-70'>Sign Up</p>
            </Link>
        </div>
      </>
      }
        
        
        
        
    </div>
    </>
  )
}

export default Navbar