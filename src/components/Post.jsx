import React from 'react'

function Post() {
  return (
    <div className="post w-[75%]  bg-yellow-400 h-[880px]">
        <div className="flex w-full bg-red-600 h-[7%] flex-col justify-center gap-2 items-start px-3">
            <div className=" w-full flex  justify-between items-center">
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
        </div>
        

        
        <div className='flex bg-green-500 border w-full h-[63%] border-white'>
            {/* // Image or video  */}
        </div>
        <div className='flex bg-blue-500 border w-full h-[30%] border-white'>
            {/* // Post details  */}
            <div className='flex w-full h-[18%] text-3xl px-1 bg-violet-800 justify-between items-center'>
                <div className='flex gap-4'>
                    <i class="ri-heart-3-line"></i>
                    <i class="ri-chat-3-line"></i>
                    <i class="ri-share-forward-line"></i>
                </div>
                <div>
                    <i class="ri-bookmark-line"></i>
                </div>
            </div>
            <div className="likes">
                
            </div>
        </div>
    </div>
  )
}

export default Post
