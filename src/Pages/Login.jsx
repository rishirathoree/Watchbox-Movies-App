import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthProviderContext'
const Login = () => {
  const navigate = useNavigate()
  const {signInWithEmailPass} = useAuth()
  const[error,seterror] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
    await signInWithEmailPass(email,password)
    navigate('/account')
    } catch (error) {
      seterror(error.message)
    }
  }
  return (
    <>
    <div className='w-full bg-loginBg bg-cover bg-center flex items-center justify-center h-screen'>
    <div className='p-4'>
      <p className='font-bold uppercase text-center mb-8 text-red-500 text-lg'>Watchbox</p>
          <p className='font-bold text-xsm'>Sign In</p>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <input onChange={(e)=>{setemail(e.target.value)}} placeholder='Email' type='email' className='font-light w-60 text-xsm my-2 text-white focus:outline-none bg-opacity-20 bg-gray-300 p-2' />
            <input onChange={(e)=>{setpassword(e.target.value)}} placeholder='Password' type="password" className='font-light w-60 text-xsm my-2 text-white focus:outline-none bg-opacity-20 bg-gray-300 p-2' />
            <button className='bg-red-500 w-60 text-xsm font-bold p-2 my-2'>Login</button>
          </form>
          {error && <p className='font-light text-xsm'>{error.replace(/-/g, ' ').slice(22,36)}</p>}
          </div>
    </div>
    </>
  )
}

export default Login