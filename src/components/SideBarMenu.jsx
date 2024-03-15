import React from 'react'
import { useRef } from 'react'



function SideBarMenu() {

    const classRef = useRef(null);

  return (
    <div className='w-[20%]  bgcolor'>
      <div className='flex flex-col gap-2 px-5 '>
        <div className="bgcolor w-full h-[3.5rem] mt-5 mb-8 items-center flex text-3xl">Instagram</div>

        <div className="bgcolor  w-full px-3  hover:bg-gray-600 rounded-lg h-[3.5rem] items-center flex  text-2xl" ref={classRef} onClick={classRef.current && classRef.current.classList.contains("active") ? (en)=>en.target.classList.remove("active") : (en)=>en.target.classList.add("active")}>
            <p className='flex items-center gap-3'><i class="ri-home-5-fill"></i><h1 className="text-lg font-light">Home</h1></p>
        </div>
        <div className="bgcolor w-full px-3 hover:bg-gray-600 rounded-lg h-[3.5rem] items-center flex text-2xl" ref={classRef} onClick={classRef.current && classRef.current.classList.contains("active") ? (en)=>en.target.classList.remove("active") : (en)=>en.target.classList.add("active")}>
            <p className='flex items-center gap-3'><i class="ri-search-line"></i><h1 className="text-lg font-light">Search</h1></p>
        </div>
        <div className="bgcolor w-full  hover:bg-gray-600 px-3 rounded-lg h-[3.5rem] items-center flex text-2xl" ref={classRef} onClick={classRef.current && classRef.current.classList.contains("active") ? (en)=>en.target.classList.remove("active") : (en)=>en.target.classList.add("active")}>
            <p className='flex items-center gap-3'><i class="ri-compass-3-line"></i><h1 className="text-lg font-light">Explore</h1></p>
        </div>
        <div className="bgcolor w-full hover:bg-gray-600 px-3 rounded-lg h-[3.5rem] items-center flex text-2xl" ref={classRef} onClick={classRef.current && classRef.current.classList.contains("active") ? (en)=>en.target.classList.remove("active") : (en)=>en.target.classList.add("active")}>
            <p className='flex items-center gap-3'><i class="ri-movie-line"></i><h1 className="text-lg font-light">Reels</h1></p>
        </div>
        <div className="bgcolor w-full hover:bg-gray-600 px-3 rounded-lg h-[3.5rem] items-center flex text-2xl" ref={classRef} onClick={classRef.current && classRef.currentclassList.contains("active") ? (en)=>en.target.classList.remove("active") : (en)=>en.target.classList.add("active")}>
            <p className='flex items-center gap-3'><i class="ri-heart-3-line"></i><h1 className="text-lg font-light ">Notification</h1></p>
        </div>
        <div className="bgcolor w-full hover:bg-gray-600 px-3 rounded-lg h-[3.5rem] items-center flex text-2xl" ref={classRef} onClick={classRef.current && classRef.currentclassList.contains("active") ? (en)=>en.target.classList.remove("active") : (en)=>en.target.classList.add("active")}>
            <p className='flex items-center gap-3'><i class="ri-add-box-line"></i><h1 className="text-lg font-light">Create</h1></p>
        </div>
        <div className="bgcolor w-full hover:bg-gray-600 px-3 rounded-lg h-[3.5rem] items-center flex text-2xl" ref={classRef} onClick={classRef.current && classRef.currentclassList.contains("active") ? (en)=>en.target.classList.remove("active") : (en)=>en.target.classList.add("active")}>
            <p className='flex items-center gap-3'><h1 className="text-lg items-center font-light gap-3 flex"> <div className="w-[28px] h-[28px] bg-red-400 rounded-full "></div><p>Profile</p></h1></p>
        </div>
        <div className="bgcolor w-full hover:bg-gray-600 px-3 rounded-lg h-[3.5rem] mt-9 flex text-3xl gap-3 items-center"><i class="ri-menu-line"></i><h1 class="text-xl font-light">Menu</h1></div>        
      </div>
    </div>
  )
}

export default SideBarMenu
