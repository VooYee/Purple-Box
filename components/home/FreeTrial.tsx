// Library Import
import React from 'react'

// Component Import
import { Button } from '../ui/button'

const FreeTrial = () => {
  return (
    <div className="wrapper w-full flex flex-col items-center gap-y-12 my-36">
      <h5 className="font-gotham text-4xl font-bold">Take the Next Step with <span className="text-gradient">Purple Box</span></h5>
        <div className="flex items-center justify-center gap-x-8 font-gotham">
          <Button variant={"default"} className="background-gradient">
            Get Started
          </Button>
          <Button variant={"outline"} className="border-purple-400 text-purple-400">
            Schedule A Demo
          </Button>
          <Button variant={"secondary"}>
            Learn More
          </Button>
        </div>
    </div>
  )
}

export default FreeTrial