import './infonav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiMailOpen } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';

const Infonav = () => {
  return (
    <div className='flex flexow justify-between items-center px-16 bg-white'>
        <div className="flex flex-rox items-center gap-4">
            <div className="flex items-center cursor-pointer gap-1 text-gray-600 hover:text-purple-700 transition duration-300 ease-in-out">
                <HiMailOpen size={16} color='#836CF1' />
                <span className='text-sm font-semibold'> info@iteck-tech</span>
            </div>
            <div className="flex items-center cursor-pointer gap-1 text-gray-600 hover:text-purple-700 transition duration-300 ease-in-out">
                <FaPhone size={16} color='#836CF1' />
                <span className='text-sm font-semibold'>(+216) 99 896 821</span>
            </div>
        </div>
        <div className="flex flox-row items-center gap-4">
            <Link to="#">Careers</Link>
            <Link to="#">FAQ</Link>
            <div className="border h-7" />
            <button>English</button>
        </div>
    </div>
  )
}

export default Infonav