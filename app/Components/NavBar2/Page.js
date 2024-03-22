import React from 'react'

const Page = () => {
  return (
    <>
        <nav className="container h-24 p-1 flex items-center gap-4 justify-between">
       <div className="left flex items-center gap-4 w-screen">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png" alt="Nepal_coat_of_arms" className='h-20' />
        <div className="heading">
            <h1 className='text-red-600 text-xl font-bold uppercase'>Lalitpur Metropolitan city</h1>
            <h1 className='text-red-600 text-xl font-bold uppercase'>Ward no: 15 service portal</h1>
        </div>
       </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png" alt="Map_of_Nepal" className='h-20' />
        </nav>
    </>
  )
}

export default Page