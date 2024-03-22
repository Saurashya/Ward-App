"use client"
import React from 'react'
import Navbar from './Components/NavBar/Page'
import Navbar2 from './Components/NavBar2/Page'
import Navbar3 from './Components/NavBar3/Page'
import OptionsBar from './Components/OptionsBar/Page'
import Hero from './Components/Hero/Page'

const page = () => {
  return (
   <>
    <Navbar />
    <Navbar2 />
    <Navbar3 />
    <OptionsBar />
    <Hero/>
   </>
  )
}

export default page