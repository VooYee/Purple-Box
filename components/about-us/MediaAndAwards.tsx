// Library Import
import React from 'react'
import Image from 'next/image'

// Assets Import
import AwardIcon from '@/public/Purple-Box-Logo.png'; 

const MediaAndAwards = () => {
  return (
    <div className="space-y-6 text-center wrapper">
        <h2 className="text-4xl font-bold font-gotham">In the Media & Recognitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[{ logo: AwardIcon, text: "Winner of the 2023 E-commerce Innovation Award" }].map((award, index) => (
            <div key={index} className="p-4 bg-white/10 rounded-lg shadow-md flex items-center space-x-4">
              <Image src={award.logo} alt="Award Icon" width={50} height={50} />
              <p className="text-purple-200">{award.text}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default MediaAndAwards