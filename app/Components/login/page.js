import React from 'react'

export default function page() {
  return (
 <>
    <div className="container flex justify-center items-center ">
        <div className="form-container flex items-center justify-center w-96 h-96">
        <div className="left w-max">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Nepal.png" alt="Flag of Nepal" className='h-16 mix-blend-multiply '/>
        </div>
        <div className="right w-max">
            <div className="top flex">
                <h1>LOGIN</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png" alt="Coat of arms" className='h-16' />
            </div>
        </div>
        </div>
    </div>
 </>
  )
}
