// Constants Imports
import { whoWeServeData } from '@/lib/constants'

const WhoWeServe = () => {
  return (
    <div className="flex flex-col items-center gap-y-12">
      <h5 className="font-gotham text-4xl font-bold text-gradient">Who We Serve</h5>
      <ul className="max-w-7xl w-full flex justify-between gap-8">
          {whoWeServeData.map((item, index) => {
            return (
              <div key={index} className="p-4 border-white border-2 rounded-xl flex flex-col items-start gap-y-4 text-white">
                <p>{item.profile}</p>
                <p>{item.description}</p>
              </div>
            )
          })}
        </ul>
    </div>
  )
}

export default WhoWeServe