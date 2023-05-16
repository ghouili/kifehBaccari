import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Dashboard, Login, Users } from '../containers';
import { Navbar, Infonav, Sidebar } from '../components';
import Cookies from 'universal-cookie';
import PrivetRoute from './PrivetRoute';

const Mainroute = () => {
  const location = useLocation();
  const cookies = new Cookies();
  let user = cookies.get("user");

  return (
    <div className='w-screen h-screen'>
      {["/register", "/login"].includes(location.pathname) ? null : <Infonav />}

      <div className='w-full h-full flex flex-row ' >
        {["/register", "/login"].includes(location.pathname) ? null : <Sidebar />}
        <div className="w-full flex flex-col pt-4 px-6 ">

          {["/register", "/login"].includes(location.pathname) ? null : <Navbar />}
          <Routes>
            <Route index element={
            <PrivetRoute roles={['client', 'admin']} >
              <Dashboard />
            </PrivetRoute>
            } />
            <Route path='login' element={<Login />} />
            <Route path='users' element={<Users />} />
          </Routes>
        </div>


      </div>
    </div>
  )
}

export default Mainroute