import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const SecureRoute = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loggedIn = Boolean(isLoggedIn);
  return (
    <div>
        {loggedIn? <Outlet/> : <Navigate to='/login'/>}
    </div>
  )
}

export default SecureRoute