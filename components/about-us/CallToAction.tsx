import React from 'react'

const CallToAction = () => {
  return (
    <div className="text-center space-y-4 bg-[#3c1361] py-8 rounded-lg p-8 wrapper shadow-xl">
      <h2 className="text-3xl font-bold font-gotham">Ready to Transform Your Business?</h2>
      <p>Join the growing list of businesses transforming their e-commerce operations with Purple-Box.</p>
      <div className="flex justify-center space-x-4">
        <a href="/services" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Explore Our Services</a>
        <a href="/schedule-demo" className="border border-purple-400 text-purple-400 px-4 py-2 rounded hover:bg-purple-400 hover:text-white">Schedule a Demo</a>
      </div>
    </div>
  )
}

export default CallToAction