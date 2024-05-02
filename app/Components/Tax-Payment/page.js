import React from 'react';

const Page = () => {
  return (
    <div className='flex justify-center items-center h-custom'>
      <div className="left">
        <img src="https://t4.ftcdn.net/jpg/05/82/88/13/360_F_582881386_zYg5kx7v1XpbfeRxFCGvz5fGxIQLTAzV.jpg" className='h-80 w-96 custom-borders'/>
      </div>
      <div className="right text-white bg-gradient-to-br from-blue-500 to-blue-700 h-80 my-borders flex flex-col gap-3 p-7 px-28">
        <h1 className='font-semibold text-xl'>Tax Details</h1> 
        <p>NID: <span className='text-green-400'>3301</span></p>
        <p>Name: <span className='text-green-400'>Hari Bahadur</span></p>
        <p>Tax Type: <span className='text-green-400'>Property Tax</span></p>
        <p>Tax Amount: <span className='text-green-400'>3211.65</span> </p>
        <p>Due Date: <span className='text-green-400'>2080/10/12</span></p>
        <button className='bg-green-500 p-2 rounded-xl font-semibold hover:bg-green-600 shadow-lg'>Make Payment</button>
      </div> 
    </div>
  );
};

export default Page;
