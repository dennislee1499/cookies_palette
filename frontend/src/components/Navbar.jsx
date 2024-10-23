import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(false);
 
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        {/* <img className='w-35 h-20 cursor-pointer' src={assets.nail_logo} alt='' /> */}
        <p>Store Name : Logo</p>
        <ul className='hidden md:flex items-start gap-8 font-medium'>
            <NavLink to='/' className='hover:text-gray-400'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5  w-3/5 m-auto hidden' />
            </NavLink>
            {/* <NavLink to='/nailtechs' className='hover:text-gray-400'>
                <li className='py-1'>Team</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden' />
            </NavLink> */}
            <NavLink to='/services' className='hover:text-gray-400'>
                <li className='py-1'>Services</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/policy' className='hover:text-gray-400'>
                <li className='py-1'>Policy</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/contact' className='hover:text-gray-400'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt='' />
                    <img className='w-2.5' src={assets.dropdown_icon} alt='' />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={() => navigate('/profile')} className='hover:text-black cursor-pointer'>Profile</p>
                            <p onClick={() => navigate('/appointments')} className='hover:text-black cursor-pointer'>Appointments</p>
                            <p className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                : <button onClick={() => navigate('/login')} className='bg-button text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar