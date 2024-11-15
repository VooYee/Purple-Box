import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils';

const GradientWrapper = ({ 
  children,
  classNameWrapper,
  classNameContent
}:{
  children: ReactNode;
  classNameWrapper: string;
  classNameContent: string;
}) => {
  return (
    <div className={cn(
      'background-gradient p-[2px] shadow-royal-purple', 
      classNameWrapper
    )}>
      <div className={cn(
        'w-full h-full bg-Dark-Primary', 
        classNameContent
      )}>
        {children}
      </div>
    </div>
  )
}

export default GradientWrapper