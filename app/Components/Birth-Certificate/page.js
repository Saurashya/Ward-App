import React from 'react';

const Page = () => {
  return (
    <div className="container flex justify-center items-center" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="box grid grid-cols-3 gap-4 w-custom h-max my-2 rounded-lg bg-gray-200 text-xl font-medium p-2">
        <h1 className='col-span-3 text-red-600 text-2xl font-semibold text-center p-1'>Birth Registration certificate</h1>
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
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="gender">Gender</label>
          <select name="Gender" id="gender" className="border p-1 rounded-lg outline-blue-600">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex flex-col p-4 col-span-3 md:col-span-1">
          <label htmlFor="pob">Place of Birth</label>
          <input type="text" name="pob" id="pob" className="border p-1 rounded-lg outline-blue-600" />
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
          <label htmlFor="grandfather">Grandfather's Name</label>
          <input type="text" name="grandfather" id="grandfather" className="border p-1 rounded-lg outline-blue-600" />
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
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" className="border p-1 rounded-lg outline-blue-600" />
        </div>
        <button className="col-span-3 bg-blue-500 text-white p-2 rounded-lg hover:opacity-90">Submit</button>
      </div>
    </div>
  );
};

export default Page;
