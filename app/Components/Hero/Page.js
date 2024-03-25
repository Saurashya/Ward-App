import React from 'react';
//import Map from "./Map.png";

const page = () => {
  return (
    <div className='flex justify-around items-center h-custom bg-gray-100'>
      <img src="https://t4.ftcdn.net/jpg/00/25/48/51/360_F_25485177_imSqBKANu9bsW2FSUhmidcmlxu4SJxWs.jpg" className='w-custom p-2'/>
      <div className="ward-container flex flex-col gap-8">
        <div className="content flex gap-2 items-center justify-center">
        <img src="https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png" className='h-24' alt="" />
        <h2 className='font-semibold'>Ward Member <br />Designation</h2>
        </div>
        <div className="content flex gap-2 items-center justify-center">
        <img src="https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png" className='h-24' alt="" />
        <h2 className='font-semibold'>Ward Member <br />Designation</h2>
        </div>
        <div className="content flex gap-2 items-center justify-center">
        <img src="https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png" className='h-24' alt="" />
        <h2 className='font-semibold'>Ward Member <br />Designation</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
