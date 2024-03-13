import React from "react";

function SideAccountSugg() {
  return (
    <div className="w-[35%]">
      <h1></h1>
      <div className="flex flex-col gap-2 items-start p-5">
        <div className=" w-full flex h-[3.5rem] mt-5 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-red-400 rounded-full "></div>
            <div className="flex flex-col items-start line-height text-white">
              <h1>Username</h1>
              <p className="text-gray-400">accName</p>
          </div>
          </div>
          <div className="switch">
            <a className="text-blue-500 mr-5 text-sm">Switch</a>
          </div>
        </div>

        <div className="mt-3 w-full flex flex-row justify-between">
          <p className="text-gray-400 font-bold">Suggested for you</p>
          <p className="text-white mr-4 text-sm">See All</p>
        </div>

      <div className="mt-3 w-full">
        <div className=" w-full flex h-[3.5rem] mt-1 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-red-400 rounded-full "></div>
            <div className="flex flex-col items-start line-height text-white">
              <h1>Username</h1>
              <p className="text-gray-400">accName</p>
          </div>
          </div>
          <div className="Follow  mr-5" >
            <a className="text-blue-500 text-sm">Follow</a>
          </div>
        </div>


        <div className=" w-full flex h-[3.5rem] mt-1 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-red-400 rounded-full "></div>
            <div className="flex flex-col items-start line-height text-white">
              <h1>Username</h1>
              <p className="text-gray-400">accName</p>
          </div>
          </div>
          <div className="Follow  mr-5" >
            <a className="text-blue-500 text-sm">Follow</a>
          </div>
        </div>


        <div className=" w-full flex h-[3.5rem] mt-1 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-red-400 rounded-full "></div>
            <div className="flex flex-col items-start line-height text-white">
              <h1>Username</h1>
              <p className="text-gray-400">accName</p>
          </div>
          </div>
          <div className="Follow  mr-5">
            <a className="text-blue-500 text-sm">Follow</a>
          </div>
        </div>
        <div className=" w-full flex h-[3.5rem] mt-1 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-red-400 rounded-full "></div>
            <div className="flex flex-col items-start line-height text-white">
              <h1>Username</h1>
              <p className="text-gray-400">accName</p>
          </div>
          </div>
          <div className="Follow  mr-5">
            <a className="text-blue-500 text-sm">Follow</a>
          </div>
        </div>


        <div className=" w-full flex h-[3.5rem] mt-1 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-red-400 rounded-full "></div>
            <div className="flex flex-col items-start line-height text-white">
              <h1>Username</h1>
              <p className="text-gray-400">accName</p>
          </div>
          </div>
          <div className="Follow">
            <a className="text-blue-500  mr-5 text-sm">Follow</a>
          </div>
        </div>
      </div>
    </div>  
    </div>
  );
}

export default SideAccountSugg;
