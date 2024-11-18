"use client"

// Library Import
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PurpleBoxLogo from '@/public/Purple-Box-Logo.png'
import { usePathname } from 'next/navigation'

// Utils Import
import { cn } from '@/lib/utils'

// Constants Import
import { navItems } from '@/lib/constants'

// Icons Import
import { Menu } from 'lucide-react';

// Component Import
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'

const Navbar = () => {
  const pathname = usePathname()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={cn(
        'fixed top-0 w-full flex flex-col items-center justify-center text-white font-gotham z-20',
        hasScrolled && 'border-b-[2px] border-Light-Orchid shadow-royal-purple backdrop-blur-lg'
      )}
    >
      <nav className='navbar-wrapper w-full h-full flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-x-2'>
          <Image 
            src={PurpleBoxLogo}
            alt='Purple Box Logo'
            height={48}
            width={48}
          />
          <h1 className='text-xl font-bold text-white'>Purple Box</h1>
        </Link>

        <div className='space-x-12 hidden lg:block'> 
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.path}
              className={cn(
                pathname === item.path && 'text-gradient font-bold'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Button className='hidden lg:block background-gradient rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl p-[2px] shadow-royal-purple'>
          <div className='w-full h-full font-medium bg-purple-900 rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl px-4 flex items-center justify-center text-white'>
            <Link href="/auth/sign-in" >
              SIGN IN
            </Link> 
          </div>
        </Button>

        <Sheet>
          <SheetTrigger>
            <Menu className='lg:hidden' />
          </SheetTrigger>
          <SheetContent className='w-full h-full flex flex-col items-center justify-center gap-y-4 bg-purple-900'>
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                className={cn(
                  'font-medium text-white',
                  pathname === item.path && 'text-gradient font-bold'
                )}
              >
                {item.name}
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export default Navbar