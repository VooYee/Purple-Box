// Constants Imports
import { transformWithPurpleBoxData } from '@/lib/constants'

// Components Imports
import GradientWrapper from '../GradientWrapper'
import EllipseGradient from '../EllipseGradient'

const Transform = () => {
  return (
    <div className="wrapper w-full text-center flex flex-col items-center justify-center gap-y-12 relative">
      <h5 className="font-gotham text-4xl font-bold">Transform <span className="text-gradient">Your E-Commerce</span> With Purple Box</h5>
      <ul className="flex flex-wrap justify-center gap-8">
        {transformWithPurpleBoxData.map((item, index) => {
          const Icon = item.image

          return (
            <GradientWrapper 
              key={index}
              classNameWrapper='max-w-[350px] rounded-[25px]'
              classNameContent='flex flex-col rounded-[25px] items-center gap-y-4 p-4'
            >
              <Icon className="w-8 h-8" />
               <div className="flex flex-col items-center gap-y-2">
                 <p className="text-xl">{item.title}</p>
                 <p>{item.description}</p>
               </div>
            </GradientWrapper>
          )
        })}
      </ul>
      <EllipseGradient className='left-[500px]' />
    </div>
  )
}

export default Transform