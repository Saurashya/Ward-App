import React from 'react'
import Image from 'next/image'

const event = ({src,heading,content,duration,link}) => {
  return (
   <>
    <div className=" h-custom w-72 flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-xl gap-5 my-10">
    <h1 className='text-xl font-semibold text-center'>{heading}</h1>
    <Image src={src} alt="" className='h-48 w-60'/>
    <p>Enrollment: {content}</p>
    <p>Time Duration: {duration}</p>
    <button className='bg-green-500 font-semibold text-white p-2 rounded-xl'><a href={link} target='_blank'>Enroll now</a></button>
    </div>
   </>
  )
}

export default event