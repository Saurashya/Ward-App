import React from 'react';

const Page = () => {
  return (
    <div className="container flex justify-around items-center gap-4">
        <img src="https://i.pinimg.com/736x/27/21/0e/27210e8b1ee4571e21df1c8b5e2c7b08.jpg" alt="" className='h-96 mix-blend-overlay -translate-y-16 p-3 rounded-full'/>
      <div className="box grid grid-cols-3 gap-4 w-custom h-max my-2 rounded-lg bg-gray-200 text-xl font-medium p-2">
        <h1 className='col-span-3 text-red-600 text-2xl font-semibold text-center p-1'>Marriage Registration</h1>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="name">First Name</label>
          <input type="text" name="name" id="name" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="middlename">Middle Name</label>
          <input type="text" name="middlename" id="middlename" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="name">Spouse's First Name</label>
          <input type="text" name="name" id="name" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="middlename">Spouse's Middle Name</label>
          <input type="text" name="middlename" id="middlename" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="lastname">Spouse's Last Name</label>
          <input type="text" name="lastname" id="lastname" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="dob">Spouse's Date of Birth</label>
          <input type="date" name="dob" id="dob" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="father">Father's Name</label>
          <input type="text" name="father" id="father" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="mother">Mother's Name</label>
          <input type="text" name="mother" id="mother" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="witness">Witness's Name</label>
          <input type="text" name="witness" id="witness" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="phone">Contact</label>
          <input type="number" name="phone" id="phone" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="dob">Book Date</label>
          <input type="date" name="dob" id="dob" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <button className="col-span-3 bg-blue-500 text-white p-2 rounded-lg hover:opacity-90">Book Registration</button>
      </div>
    </div>
  );
};

export default Page;
