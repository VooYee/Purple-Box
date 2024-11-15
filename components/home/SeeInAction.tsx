// Library Import
import Image from 'next/image'

// Asset Imports
import RobotPad from "@/public/home/RobotPad.png"

const SeeInAction = () => {
  return (
    <div className="flex flex-col items-center gap-y-12">
      <h5 className="font-gotham text-4xl font-bold">See <span className="text-gradient">Purple-Box</span> in Action</h5>
      <div>
        <Image 
          src={RobotPad}
          alt="RobotPad"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default SeeInAction