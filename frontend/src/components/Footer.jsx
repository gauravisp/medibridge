import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-10 bg-pink-50 rounded-t-2xl mt-16 border-t border-pink-100'>
      <div className='grid md:grid-cols-[3fr_1fr_1fr] gap-12 py-12 text-sm'>
        {/* Left */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>M</span>
            </div>
            <span className='text-xl font-bold text-pink-600'>MediBridge</span>
          </div>
          <p className='text-gray-500 leading-6 max-w-sm'>
            MediBridge connects patients with trusted healthcare professionals for seamless appointment booking. Fast, reliable, and built for modern healthcare.
          </p>
        </div>

        {/* Middle */}
        <div>
          <p className='text-base font-semibold text-gray-700 mb-4'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-500'>
            {['Home', 'About Us', 'Contact Us', 'Privacy Policy'].map(item => (
              <li key={item} className='hover:text-pink-500 cursor-pointer transition-colors'>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className='text-base font-semibold text-gray-700 mb-4'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-500'>
            <li>+91-90000-90000</li>
            <li>support@medibridge.in</li>
          </ul>
        </div>
      </div>

      <hr className='border-pink-200' />
      <p className='py-4 text-xs text-center text-gray-400'>
        © 2025 MediBridge — All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer