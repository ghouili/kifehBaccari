import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Dashboard, Login } from '../containers';
import { Navbar } from '../components';


const Mainroute = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/login' || location.pathname === '/register' ? null :
        <Navbar />
      }
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default Mainroute