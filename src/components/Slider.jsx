import React from 'react'
import Post from '../components'

function Slider() {
  return (
     <div className='w-[65%] '>
       <div className="StatusContainer flex w-[100%] h-[20%] border-b-white">
          <div className="statusBox w-full h-full items-center flex gap-4 px-11">
            <div className="status w-[70px] h-[70px]  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500    border-pink-500 border-2"></div>
            <div className="status w-[70px] h-[70px]  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500    border-pink-500 border-2"></div>
            <div className="status w-[70px] h-[70px]  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500    border-pink-500 border-2"></div>
            <div className="status w-[70px] h-[70px]  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500    border-pink-500 border-2"></div>
            <div className="status w-[70px] h-[70px]  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500    border-pink-500 border-2"></div>
          </div>
       </div>
       <div className="postContainer w-full h-[80%] ">
          <div className="postBox w-full flex-col flex items-center gap-3 pt-5">
            <Post/>   
          </div>
       </div>      
    </div>
  )
}

export default Slider
