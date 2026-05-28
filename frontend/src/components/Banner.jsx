import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='flex bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-lg shadow-pink-100'>
      {/* Left */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <p className='text-xs font-semibold text-pink-100 uppercase tracking-widest mb-3'>MediBridge</p>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug'>
          <p>Book an Appointment</p>
          <p className='mt-2'>With 100+ Verified Doctors</p>
        </div>
        <p className='text-pink-100 text-sm mt-3 mb-6 max-w-xs'>Fast, reliable, and hassle-free healthcare booking at your fingertips.</p>
        <button
          onClick={() => { navigate('/login'); scrollTo(0, 0) }}
          className='bg-white text-pink-500 font-semibold text-sm px-8 py-3 rounded-full hover:scale-105 transition-all shadow-md'
        >
          Create Free Account
        </button>
      </div>

      {/* Right */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner