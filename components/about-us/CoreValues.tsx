// Library Import
import React from 'react'

// Components Import
import GradientWrapper from '../GradientWrapper'

const CoreValues = () => {
  return (
    <div className="wrapper space-y-6">
      <h2 className="text-4xl font-bold text-center font-gotham">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Efficient", desc: "We believe in delivering solutions that maximize productivity and reduce overhead." },
          { title: "Scalable", desc: "Our technology is designed to grow with our clients effortlessly." },
          { title: "Innovative", desc: "Innovation is at the heart of what we do." },
          { title: "Empowering", desc: "We empower clients by providing tools that drive success." }
        ].map((value, index) => (
          <GradientWrapper 
            key={index}
            classNameWrapper='rounded-xl'
            classNameContent='rounded-xl w-full flex flex-col items-center justify-center p-6 space-y-4 text-center bg-purple-900'
            useShadow={true}
          >
            <h3 className="text-2xl font-semibold">{value.title}</h3>
            <p className="text-sm text-purple-200">{value.desc}</p>
          </GradientWrapper>
        ))}
      </div>
    </div>
  )
}

export default CoreValues