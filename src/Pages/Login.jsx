import React from 'react'

const Login = () => {
  return (
    <>
    <div className='w-full bg-loginBg bg-cover bg-center flex items-center justify-center h-screen'>
    <div className='p-4'>
      <p className='font-bold uppercase text-center mb-8 text-red-500 text-lg'>Watchbox</p>
          <p className='font-bold text-xsm'>Sign In</p>
          <form className='flex flex-col'>
            <input type="text" className='font-light w-60 text-xsm my-2 text-white focus:outline-none bg-opacity-20 bg-gray-300 p-2' />
            <input type="text" className='font-light w-60 text-xsm my-2 text-white focus:outline-none bg-opacity-20 bg-gray-300 p-2' />
            <button className='bg-red-500 w-60 text-xsm font-bold p-2 my-2'>Sign In</button>
          </form>
          </div>
    </div>
    </>
  )
}

export default Login