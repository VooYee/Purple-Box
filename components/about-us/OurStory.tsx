// Library Import
import React from 'react'
import Image from 'next/image'

// Assets Import
import TempImg from '@/public/Purple-Box-Logo.png'

const OurStory = () => {
  return (
    <div className=" wrapper text-center space-y-6">
      <h2 className="text-4xl font-gotham font-bold text-center">Our <span className='text-gradient'>Story</span></h2>
      <div className="space-y-4">
        <div className='w-full flex justify-between gap-x-12 items-center'>
          <p className='max-w-2xl text-start'>
            Purple-Box was born out of a desire to simplify and enhance e-commerce operations for businesses of all sizes. Our founders, a group of passionate AI developers and e-commerce veterans, recognized a common challenge: the need for smart, automated solutions to handle customer acquisition and support in a digital-first world.
          </p>
          <Image 
            src={TempImg} 
            alt="Purple Box Logo" 
            width={250} 
            height={250} 
            className="rounded-full"
          />
        </div>
        <div className='w-full flex justify-between gap-x-12 items-center'>
          <Image 
            src={TempImg} 
            alt="Purple Box Logo" 
            width={250} 
            height={250} 
            className="rounded-full"
          />
          <p className='max-w-2xl text-end'>
            Since our inception, we have grown from a small startup into a leading AI solutions provider, trusted by businesses across Europe and North America. With every step forward, we’ve expanded our capabilities, refined our technology, and continued to innovate to meet the evolving needs of our clients.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurStory