import React from "react";

const Trusted = () => {
  return (
    <>
      <div className="flex flex-col items-center p-8">
        <div>        <h3>Trusted by 1000+ companies</h3>
        </div>

        <div className=" flex sm:flex-row sm:gap-x-4">
          <div className="slide">
            <img src="image3.png"></img>
          </div>
          <div className="slide">
            <img src="image3.png"></img>
          </div>
          <div className="slide">
            <img src="image3.png"></img>
          </div>
          <div className="slide">
            <img src="image3.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
