"use client"
import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
  <nav className='bg-gray-300 font-semibold'>
    <ul className='flex first-line:items-center gap-6 px-4'>
        <li className='cursor-pointer hover:text-red-500'><Link href="/Components/Hero">Home</Link></li>
        <li className='cursor-pointer hover:text-red-500'><Link href="/Components/Birth-Certificate">Birth Certificate</Link></li>
        <li className='cursor-pointer hover:text-red-500'><Link href="/Components/Marriage-Certificate">Marriage Certificate</Link></li>
        <li className='cursor-pointer hover:text-red-500'><Link href="/Components/Building-Permit">Building Permit</Link></li>
        <li className='cursor-pointer hover:text-red-500'><Link href="/Components/Tax-Payment">Tax Payment</Link></li>
        <li className='cursor-pointer hover:text-red-500'><Link href="/Components/SignIn">Sign IN</Link></li>
    </ul>
  </nav>
  )
}

export default Page