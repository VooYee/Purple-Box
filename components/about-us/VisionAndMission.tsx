import React from 'react'

const VisionAndMission = () => {
  return (
    <div className="wrapper mt-[120px] text-center space-y-8 ">
      <h2 className="text-4xl font-bold font-gotham">Our Vision and Mission</h2>
      <div className='shadow-royal-purple'>
        <p className="text-2xl italic bg-gradient-to-r from-purple-400 to-purple-600 p-4 rounded-lg">
          "To revolutionize e-commerce with AI, empowering businesses to innovate and grow with scalable, efficient, and cutting-edge solutions."
        </p>
      </div>
      <div className='w-full flex flex-col gap-y-4 items-center'>
        <p className="max-w-2xl mx-auto font-agrandir">
          Our mission is to enable small to medium-sized e-commerce businesses to optimize client acquisition and management using AI technology. We aim to enhance operational efficiency, drive sustainable growth, and ensure exceptional customer support experiences.
        </p>
        <div className='w-[250px] bg-white h-[1px] rounded-full' />
      </div>
    </div>
  )
}

export default VisionAndMission