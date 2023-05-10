import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Dashboard, Login } from '../containers';
import { Navbar, Infonav, Sidebar } from '../components';
import Cookies from 'universal-cookie'
import User from '../containers/user/User';

const Mainroute = () => {
  const location = useLocation();
  const cookies = new Cookies();
  let user = cookies.get("user");

  return (
    <div className='w-screen h-screen'>
      {["/register", "/login"].includes(location.pathname) ? null : <Infonav />}

      <div className='w-full h-full flex flex-row ' >
        {["/register", "/login"].includes(location.pathname) ? null : <Sidebar />}
        <div className="w-full flex flex-col ">

          {["/register", "/login"].includes(location.pathname) ? null : <Navbar />}
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path='login' element={<Login />} />
            <Route path='users' element={<User />} />
          </Routes>
        </div>


      </div>
    </div>
  )
}

export default Mainroute