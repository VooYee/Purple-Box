import React from 'react'
import Image from 'next/image'
import EllipseGradientImg from "@/public/EllipseGradient.png"
import { cn } from '@/lib/utils'

const EllipseGradient = ({
  className
}:{
  className?: string
}) => {
  return (
    <div className={cn(
      "absolute -z-20", className
    )}>
      <Image 
        src={EllipseGradientImg}
        alt="Ellipse Gradient"
      />
    </div>
  )
}

export default EllipseGradient