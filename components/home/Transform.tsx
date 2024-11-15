// Library Import
import React from 'react'

// Constants Imports
import { transformWithPurpleBoxData } from '@/lib/constants'

const Transform = () => {
  return (
    <div className="wrapper w-full text-center flex flex-col items-center justify-center gap-y-12 relative">
      <h5 className="font-gotham text-4xl font-bold">Transform <span className="text-gradient">Your E-Commerce</span> With Purple Box</h5>
      <ul className="flex flex-wrap justify-center gap-8">
        {transformWithPurpleBoxData.map((item, index) => {
          const Icon = item.image

          return (
            <li key={index} className="max-w-[350px] border-2 border-white rounded-[25px] p-4 flex flex-col items-center gap-y-4">
              <Icon className="w-8 h-8" />
              <div className="flex flex-col items-center gap-y-2">
                <p className="text-xl">{item.title}</p>
                <p>{item.description}</p>
              </div>
            </li> 
          )
        })}
      </ul>
    </div>
  )
}

export default Transform