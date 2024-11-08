import React from 'react'
import { coreValuesData } from '@/lib/constants'

const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center gap-y-16">

      {/* Our Vision and Mission */}
      <div className='wrapper mt-[120px] flex flex-col items-center gap-y-8'>
        <h5 className="text-4xl font-bold font-gotham">Our Vision and Mission</h5>
        <div className='w-full flex justify-center gap-x-8 text-white text-center'>
          <div className='w-full border-2 border-white rounded-xl p-6 space-y-4'>
            <p>Vision</p>
            <p>To revolutionize e-commerce with AI, empowering businesses to innovate and grow with scalable, efficient, and cutting-edge solutions</p>
          </div>
          <div className='w-full border-2 border-white rounded-xl p-6 space-y-4'>
            <p>Our Mission</p>
            <p>Our mission is to enable small to medium-sized e-commerce businesses to optimize client acquisition and management using AI technology. We aim to enhance operational efficiency, drive sustainable growth, and ensure exceptional customer support experiences</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className='wrapper flex flex-col gap-y-8'>
        <h5 className="text-4xl font-bold font-gotham">Our Story</h5>
        <div className='flex flex-col w-full gap-y-8'>
          <div className='w-full flex gap-x-8 items-center'>
            <div className='h-[200px] w-full rounded-xl border-2 border-white'>

            </div>
            <p>
            Purple-Box was born out of a desire to simplify and enhance e-commerce operations for businesses of all sizes. Our founders, a group of passionate AI developers and e-commerce veterans, recognized a common challenge: the need for smart, automated solutions to handle customer acquisition and support in a digital-first world
            </p>
          </div>
          <div className='w-full flex gap-x-8 items-center'>
            <p>
              Since our inception, we have grown from a small startup into a leading AI solutions provider, trusted by businesses across Europe and North America. With every step forward, we’ve expanded our capabilities, refined our technology, and continued to innovate to meet the evolving needs of our clients.
            </p>
            <div className='h-[200px] w-full rounded-xl border-2 border-white'>

            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className='wrapper flex flex-col gap-y-8'>
        <h5 className="text-4xl font-bold font-gotham">Our Core Values</h5>
        <ul className='w-full flex gap-x-8'>
          {coreValuesData.map((item, index) => {
              return (
                <div key={index} className="w-full p-4 border-white border-2 rounded-xl flex flex-col items-center gap-y-4 text-white text-center">
                  <p className='text-xl font-bold text-center'>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              )
            })}
        </ul>
      </div>

    </div>
  )
}

export default AboutUsPage