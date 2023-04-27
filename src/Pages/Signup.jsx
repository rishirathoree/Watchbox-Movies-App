import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthProviderContext'

const Signup = () => {
  const {signUpWithEmailPass} = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUpWithEmailPass(email,password)
      navigate('/account')
    } 
    catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
    <div className='w-full bg-loginBg bg-cover bg-center flex items-center justify-center h-screen'>
    <div className='p-4'>
      <p className='font-bold uppercase text-center mb-8 text-red-500 text-lg'>Watchbox</p>
          <p className='font-bold text-xsm'>Sign Up</p>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <input onChange={(e)=>{setemail(e.target.value)}} placeholder='Email' type='email' className='font-light w-60 text-xsm my-2 text-white focus:outline-none bg-opacity-20 bg-gray-300 p-2' />
            <input onChange={(e)=>{setpassword(e.target.value)}} placeholder='Password' type="password" className='font-light w-60 text-xsm my-2 text-white focus:outline-none bg-opacity-20 bg-gray-300 p-2' />
            <button className='bg-red-500 w-60 text-xsm font-bold p-2 my-2'>Sign Up</button>
          </form>
          </div>
    </div>
    </>
  )
}

export default Signup