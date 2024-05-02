import React from 'react'

const Page = () => {
  return (
    <>
        
        <nav className='bg-blue-500 flex text-white text-sm h-8 items-center justify-between px-4'>
            <div className="content-left flex gap-4 mx-2 ">
            <p>gunaso@merowada.gov.np</p>
            <img src="https://w7.pngwing.com/pngs/421/683/png-transparent-computer-icons-mobile-phones-telephone-email-home-business-phones-phone-icon-miscellaneous-angle-service-thumbnail.png" alt="" className='h-5 w-5 mix-blend-color-burn'/>
            <p>01-5533221</p>
            </div>
            <div className="content-center flex gap-2">
                <input type="text" className='w-52 rounded-lg shadow-lg px-3 text-black outline-blue-500' placeholder='search'/>
                <img src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg" alt="" className='h-5 w-5 mix-blend-color-burn'/>
            </div>
            <div className="content-right flex gap-2">
                <button className='bg-red-600 p-1 rounded-lg'>Nep</button>
                <button className='bg-black p-1 rounded-lg'>Eng</button>
            </div>
        </nav>
        
    </>
  )
}

export default Page
