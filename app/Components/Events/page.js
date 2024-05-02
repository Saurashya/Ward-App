import React from 'react'
import Event from './event'

import soap from '../../../public/soap.jpeg'
import computer from '../../../public/computer.jpeg'
import cooking from '../../../public/cooking.jpeg'
import health from '../../../public/health.jpeg'
const page = () => {
  return (
   <>
    <h1 className='text-center text-3xl font-bold text-red-600 my-3'>Events</h1>
    <div className="container w-full h-full flex justify-around">
      <Event src={computer} heading={"Computer Skills Wokshop"} content={"Rs.1000"} duration={"3 weeks"} link={"https://buy.stripe.com/test_00gdSh8Qx55N9JCfYY"}/>
      <Event src={soap} heading={"Soap Making Workshop"} content={"Rs.500"} duration={"1 week"} link={"https://buy.stripe.com/test_14k6pP7Mt0Px092001"}/>
      <Event src={cooking} heading={"Healthy Cooking Workshop"} content={"Rs.1500"} duration={"2 weeks"} link={"https://buy.stripe.com/test_14k29z2s92XFbRK146"}/>
      <Event src={health} heading={"Mental Health Management"} content={"Rs.500"} duration={"1 week"} link={"https://buy.stripe.com/test_fZe9C19UB2XF3lecMP"}/>
    </div>
   </>
  )
}

export default page