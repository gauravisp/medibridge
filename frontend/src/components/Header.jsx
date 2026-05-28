import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl px-6 md:px-10 lg:px-20 border border-pink-200'>
      {/* Left */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 md:py-[10vw] md:mb-[-30px]'>
        <div className='inline-flex items-center gap-2 bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-full'>
          <span className='w-2 h-2 rounded-full bg-pink-500'></span>
          Trusted by 10,000+ patients
        </div>
        <p className='text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold leading-tight'>
          Your Health, <br />
          <span className='text-pink-500'>Our Priority</span>
        </p>
        <p className='text-gray-500 text-sm leading-relaxed max-w-sm'>
          Connect with verified specialists and book appointments instantly — from routine check-ups to expert consultations.
        </p>
        <div className='flex items-center gap-3'>
          <img className='w-20' src={assets.group_profiles} alt="" />
          <span className='text-xs text-gray-500'>Join thousands of patients who trust MediBridge</span>
        </div>
        <a href='#speciality' className='flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105 duration-300 shadow-md shadow-pink-200'>
          Book Appointment <img className='w-3 brightness-200' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* Right */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-2xl' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header