"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PurpleBoxLogo from '@/public/Purple-Box-Logo.png'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT US",
    path: "/about-us"
  },
  {
    name: "OUR SERVICES",
    path: "/our-services"
  },
  {
    name: "PRICING",
    path: "/pricing"
  }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='w-full flex flex-col items-center justify-center text-white font-gotham'>
      <nav className='w-full h-full flex items-center justify-center gap-x-40'>
        <Link href="/" className='flex items-center gap-x-2'>
          <Image 
            src={PurpleBoxLogo}
            alt='Purple Box Logo'
            height={48}
            width={48}
          />
          <h1 className='text-xl'>Purple Box</h1>
        </Link>

        <div className='space-x-12'> 
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

        <Button className='background-gradient rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl p-[2px] shadow-royal-purple'>
          <div className='w-full h-full font-semibold bg-Dark-Primary rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl px-4 flex items-center justify-center'>
            <Link href="/auth/sign-in" >
              SIGN IN
            </Link> 
          </div>
        </Button>
      </nav>
    </header>
  )
}

export default Navbar