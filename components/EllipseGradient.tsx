import React from 'react'
import Image from 'next/image'
import EllipseGradientImg from "@/public/EllipseGradient.png"

const EllipseGradient = ({
  className
}:{
  className: string
}) => {
  return (
    <div className={className}>
      <Image 
        src={EllipseGradientImg}
        alt="Ellipse Gradient"
      />
    </div>
  )
}

export default EllipseGradient