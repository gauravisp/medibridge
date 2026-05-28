import React, { useContext, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between py-4 px-2 border-b border-pink-200 bg-white'>
      {/* Brand Name */}
      <div onClick={() => navigate('/')} className='cursor-pointer flex items-center gap-2'>
        <div className='w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center'>
          <span className='text-white font-bold text-sm'>M</span>
        </div>
        <span className='text-xl font-bold text-pink-600 tracking-tight'>MediBridge</span>
      </div>

      {/* Desktop Nav */}
      <ul className='hidden md:flex items-center gap-8 font-medium text-sm text-gray-600'>
        {[['/', 'HOME'], ['/doctors', 'FIND DOCTORS'], ['/about', 'ABOUT'], ['/contact', 'CONTACT']].map(([path, label]) => (
          <li key={path}>
            <NavLink to={path} className={({ isActive }) =>
              isActive ? 'text-pink-500 border-b-2 border-pink-400 pb-0.5' : 'hover:text-pink-500 transition-colors'
            }>{label}</NavLink>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className='flex items-center gap-3'>
        {location.pathname === '/' && (
          <button
            onClick={() => window.open('https://appointy-six.vercel.app', '_blank')}
            className='hidden md:block text-xs px-4 py-2 rounded-full border border-pink-400 text-pink-500 hover:bg-pink-50 transition-all'
          >
            Admin Panel
          </button>
        )}

        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-9 h-9 rounded-full object-cover border-2 border-pink-300' src={userData.image || '/fallback-user.png'} alt="profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown" />
            <div className='absolute top-0 right-0 pt-12 z-20 hidden group-hover:block'>
              <div className='min-w-44 bg-white border border-pink-100 shadow-lg rounded-xl flex flex-col gap-1 p-3 text-sm text-gray-600'>
                <p onClick={() => navigate('my-profile')} className='hover:text-pink-500 hover:bg-pink-50 px-3 py-2 rounded-lg cursor-pointer transition-colors'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-pink-500 hover:bg-pink-50 px-3 py-2 rounded-lg cursor-pointer transition-colors'>My Appointments</p>
                <hr className='border-pink-100 my-1' />
                <p onClick={logout} className='hover:text-red-400 hover:bg-red-50 px-3 py-2 rounded-lg cursor-pointer transition-colors'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='hidden md:block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all'
          >
            Get Started
          </button>
        )}

        {/* Mobile hamburger */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-5 border-b border-pink-100'>
          <span className='text-xl font-bold text-pink-600'>MediBridge</span>
          <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-6 cursor-pointer' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-1 mt-6 px-5 text-base font-medium text-gray-700'>
          {[['/', 'Home'], ['/doctors', 'Find Doctors'], ['/about', 'About'], ['/contact', 'Contact']].map(([path, label]) => (
            <NavLink key={path} onClick={() => setShowMenu(false)} to={path} className='w-full'>
              <p className='px-4 py-3 rounded-xl hover:bg-pink-50 hover:text-pink-500 transition-colors'>{label}</p>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar