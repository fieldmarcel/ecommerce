import React, { useState } from "react";

const Photos = ({ imgs = [{}] }) => {
  const [image, setImage] = useState(imgs[0]);

  const handleImage = (curElem) => {
    setImage(curElem);
  };

  return (
    <>
      {/* Main Image Section */}
      <div className="mb-4 w-full sm:ml-8 sm:w-4/5">
        <img
          src={image.url}
          alt={image.filename}
          className="w-full h-60 sm:h-96 object-cover rounded-md shadow-sm"
        />
      </div>

      {/* Thumbnail Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  sm:ml-8 w-full sm:w-4/5">
        {imgs.map((curElem) => (
          <figure
            key={curElem.id}
            className="relative group cursor-pointer"
            onClick={() => handleImage(curElem)}
          >
            {/* Thumbnail Image */}
            <img
              src={curElem.url}
              alt={curElem.filename}
              className="h-20 w-full object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            
            {/* Caption */}
            <figcaption className="absolute bottom-0 text-xs left-0 w-full p-2 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {curElem.filename}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};

export default Photos;
