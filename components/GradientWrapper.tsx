import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils';

const GradientWrapper = ({ 
  children,
  classNameWrapper,
  classNameContent,
  useShadow
}:{
  children: ReactNode;
  classNameWrapper?: string;
  classNameContent?: string;
  useShadow?: boolean;
}) => {
  return (
    <div className={cn(
      'background-gradient p-[2px]', 
      classNameWrapper,
      useShadow && 'shadow-royal-purple'
    )}>
      <div className={cn(
        'w-full h-full bg-Dark-Primary p-4', 
        classNameContent
      )}>
        {children}
      </div>
    </div>
  )
}

export default GradientWrapper