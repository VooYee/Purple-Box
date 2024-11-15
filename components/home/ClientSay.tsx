// Library Import
import React from 'react'
import Image from 'next/image'

// Asset Imports
import Dummy from '@/public/Purple-Box-Logo.png'

// Constants Imports
import { customerTestimonialsData } from '@/lib/constants'

const ClientSay = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 py-24 w-full h-full bg-[#3c1361] shadow-lg">
      <h5 className="font-gotham text-4xl font-bold text-white tracking-wide">
        What Our Clients Say
      </h5>
      <ul className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {customerTestimonialsData.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-purple-700 rounded-xl bg-[#2e0844] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-start gap-y-6"
          >
            <div className="flex gap-x-3 items-center">
              <Image
                src={Dummy}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-start">
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-purple-400">
                  {item.position} @ {item.company}
                </p>
              </div>
            </div>
            <p className="text-purple-200 text-sm italic leading-relaxed">
              &quot;{item.quote}&quot;
            </p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ClientSay
