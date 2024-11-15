// Library Import
import React from 'react'
import Image from 'next/image'

// Assets Import
import OurService2 from '@/public/our-services/OurService2.png'

const CRMIntegration = () => {
  return (
    <div className="wrapper flex flex-row justify-start items-start gap-x-12">
      <div className="relative h-[250px] w-[250px]">
        <Image src={OurService2} alt="CRM Integration" layout="fill" objectFit="cover" className="rounded-lg shadow-Royal-Purple" />
      </div>
      <div className='text-start space-y-4'>
        <h3 className="text-3xl font-bold font-gotham">CRM Integration: Maximize Your Customer Relationships</h3>
        <p className="max-w-3xl">
          Integrate Purple-Box seamlessly with your existing CRM systems to improve data management and deliver personalized marketing campaigns.
        </p>
      </div>
    </div>
  )
}

export default CRMIntegration