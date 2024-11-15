// Library Import
import React from 'react'
import Image from 'next/image'

// Asset Imports
import Dummy from '@/public/Purple-Box-Logo.png'

// Constants Imports
import { customerTestimonialsData } from '@/lib/constants'

const ClientSay = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 py-24 bg-Royal-Purple/50 w-full h-full shadow-lg">
      <h5 className="font-gotham text-4xl font-bold">What Our Clients Say</h5>
      <ul className="max-w-7xl w-full flex justify-between gap-8">
        {customerTestimonialsData.map((item, index) => {
          return (
            <div key={index} className="p-4 border-white border-2 rounded-xl flex flex-col items-start gap-y-4">
              <div className="flex gap-x-2 items-center">
                <Image 
                  src={Dummy}
                  alt={item.name}
                  className="w-[50px] h-[50px] object-cover"
                />
                <div className="text-start">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-white/50">{item.position} @ {item.company}</p>
                </div>
              </div>
              <p className="text-white text-center">&quot;{item.quote}&quot;</p>
            </div>
          )
        })}
      </ul>
  </div>
  )
}

export default ClientSay