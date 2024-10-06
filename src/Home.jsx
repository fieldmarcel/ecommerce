import React from 'react'

const Home = () => {
  return (
    <>
    <div className="flex sm:flex-row  flex-col w-screen h-screen overflow-hidden">
      
      {/* Left Part: Single Image taking half the viewport width */}
      <div className="sm:w-1/2 sm:h-full overflow-hidden">
        <img src="3.jpg" alt="" className="w-full sm:h-full object-cover" />
      </div>
      
      {/* Right Part: Multiple Images and Video */}
      <div className="sm:w-1/2 flex flex-col justify-evenly sm:gap-4 p-4 overflow-hidden">
        
        {/* Row with two images */}
        <div className="flex gap-4 overflow-hidden">
          <img src="1.jpg" alt="" className="w-1/2 h-auto object-cover" />
          <img src="2.jpg" alt="" className="w-1/2 h-auto object-cover" />
        </div>
  
        {/* Video */}
        <div className="mt-4 overflow-hidden">
          <video src="1.mp4" controls className="w-full h-auto object-cover" />
        </div>
        
      </div>
      
    </div>
  </>
  
  )
}

export default Home