import React, { useEffect } from 'react';
import { useAuth } from '../Contexts/AuthProviderContext';
import { useNavigate } from 'react-router-dom';

const Accountprotectedroute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      {children}
    </>
  );
};

export default Accountprotectedroute;
