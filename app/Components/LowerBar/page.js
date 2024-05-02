import React from 'react'

const page = () => {
  return (
 <>
  <div className="bg-blue-500 flex p-3 text-white">
    <div className="stack1">
        <h1 className='text-xl font-semibold'> Information</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eaque.</p>
    </div>
    <div className="stack2">
    <h1 className='text-xl font-semibold'> Events</h1>
        <ul>
            <li>Computer Skills workshop</li>
            <li>Soap Making workshop</li>
            <li>Healthy Cooking workshop</li>
            <li>Mental health Management workshop</li>
        </ul>
    </div>
    <div className="stack3">
    <h1 className='text-xl font-semibold'> About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eaque.</p>
    </div>
    <div className="stack3">
    <h1 className='text-xl font-semibold'> Ward Members</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eaque.</p>
    </div>
    </div>
 </>
  )
}

export default page