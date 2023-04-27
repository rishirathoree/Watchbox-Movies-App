import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../Contexts/AuthProviderContext';
import { useNavigate } from 'react-router-dom';
const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {user,logout} = useAuth() 
  const handleLogout = async () => {
    try {
    await logout()
    navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex h-full items-top flex-col  mt-40 justify-start p-8'>
      <div>
      <p className='font-light text-lg my-4'>{user && user.email}</p>
      <button className='p-2 bg-red-500 rounded-md' onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Account;
