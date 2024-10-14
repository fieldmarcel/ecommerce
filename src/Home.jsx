import React from 'react';

const Home = () => {
  return (
    <div className="flex sm:flex-row flex-col w-screen h-screen overflow-hidden">
      {/* Left Part: Single Image taking half the viewport width */}
      <div className="sm:w-1/2 w-full  h-full overflow-hidden">
        <img src="3.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Right Part: Multiple Images and Video */}
      <div className="sm:w-1/2 w-full flex flex-col justify-between p-4 ">
        {/* Row with two images */}
        <div className="flex gap-4 overflow-hidden">
          <img src="1.jpg" className="w-1/2 object-cover" alt="Image 1" />
          <img src="2.jpg" className="w-1/2 object-cover" alt="Image 2" />
        </div>

        {/* Video Section */}
        <div className="flex-grow mt-4">
          <video src="1.mp4" controls className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
