// Library Import
import React from 'react'
import Image from 'next/image'

// Assets Import
import ServiceOverviewImg from '@/public/our-services/OurService1.png'

const ServiceOverview = () => {
  return (
    <div className="wrapper text-center mt-[100px] flex flex-row justify-start items-start gap-x-12">
      <div className="relative h-[250px] w-[250px]">
        <Image src={ServiceOverviewImg} alt="AI and Automation Banner" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
      </div>
      <div className='text-start space-y-4'>
        <h2 className="text-4xl font-bold font-gotham">
          Empower Your E-Commerce with AI-Driven Solutions
        </h2>
        <p className="max-w-3xl text-lg text-purple-200">
          Purple-Box combines cutting-edge AI technology with a deep understanding of e-commerce to provide smart automation solutions that help businesses grow. From lead generation to customer support, our comprehensive suite of services ensures your business stays ahead of the competition.
        </p>
      </div>
    </div>
  )
}

export default ServiceOverview