
import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between' >
            <h2 className=' h-12 w-12 rounded-full bg-white flex justify-center items-center font-semibold text-xl'>{props.id}</h2>
            <div>
                <p className='leading-normal text-lg text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia atque harum quae sed quis? Enim quibusdam beatae maxime. </p>
                <div className='flex justify-between' >
                    <button className=' bg-blue-600 text-white font-medium px-8 py-2 rounded-full ' >{props.tag}</button>
                    <button  className=' bg-blue-600 text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
    </div>
)
}

export default RightCardContent