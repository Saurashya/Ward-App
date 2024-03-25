"use client"
import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
  <nav className='bg-gray-300 font-semibold'>
    <ul className='flex first-line:items-center gap-6 px-4'>
        <li className='cursor-pointer'><Link href="/Components/Hero">Home</Link></li>
        <li className='cursor-pointer'><Link href="/Components/Birth-Certificate">Birth Certificate</Link></li>
        <li className='cursor-pointer'>Option 1</li>
        <li className='cursor-pointer'>Option 1</li>
        <li className='cursor-pointer'>Option 1</li>
        <li className='cursor-pointer'>Option 1</li>
    </ul>
  </nav>
  )
}

export default Page