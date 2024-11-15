// Constants Imports
import { whoWeServeData } from '@/lib/constants'
import GradientWrapper from '../GradientWrapper'

const WhoWeServe = () => {
  return (
    <div className="flex flex-col items-center gap-y-12">
      <h5 className="font-gotham text-4xl font-bold text-gradient">Who We Serve</h5>
      <ul className="max-w-7xl w-full flex justify-between gap-8">
          {whoWeServeData.map((item, index) => {
            return (
              <GradientWrapper
                key={index}
                classNameContent='rounded-xl flex flex-col items-center gap-y-4 text-center p-6'
                classNameWrapper='rounded-xl'
              >
                <p className='font-bold text-xl'>{item.profile}</p>
                <p>{item.description}</p>
              </GradientWrapper>
            )
          })}
        </ul>
    </div>
  )
}

export default WhoWeServe