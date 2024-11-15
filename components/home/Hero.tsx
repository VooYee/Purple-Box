// Library Import
import React from 'react'
import Image from 'next/image'

// Components Imports
import EllipseGradient from '../EllipseGradient'

// Asset Imports
import RobotPad from "@/public/home/RobotPad.png"

const Hero = () => {
  return (
    <div className="wrapper mt-[120px] w-full text-center h-[500px] flex flex-col items-center justify-center gap-y-4 relative">
      <h3 className="text-4xl font-bold font-gotham">Grow <span className="text-gradient">Smart</span>, Sell More</h3>
      <h5 className="text-xl">Unlock the power of AI with Purple-Box, the multichannel chatbot <br/> designed for e-commerce growth.</h5>
      <Image 
        src={RobotPad}
        alt="RobotPad"
        width={500}
        height={500}
      />
      <EllipseGradient 
        className="absolute -z-20"
      />
      <div className="w-full max-w-md rounded-full background-gradient shadow-royal-purple h-[4px] my-4" />
    </div>
  )
}

export default Hero