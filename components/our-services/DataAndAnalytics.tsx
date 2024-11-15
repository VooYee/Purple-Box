// Library Import
import React from 'react'
import Image from 'next/image'

// Assets Import
import OurService3 from '@/public/our-services/OurService3.png'

const DataAndAnalytics = () => {
  return (
    <div className="space-y-6 wrapper flex flex-row justify-start items-start gap-x-12">
      <div className="relative h-[250px] w-[250px]">
        <Image src={OurService3} alt="Analytics Dashboard" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
      </div>
      <div className='text-start space-y-4'>
        <h3 className="font-gotham text-3xl font-bold text-center">Data & Analytics: Unlock Actionable Insights</h3>
        <p className="max-w-3xl">
          Harness the power of real-time data analytics to gain deep insights into your operations and make informed decisions.
        </p>
      </div>
    </div>
  )
}

export default DataAndAnalytics