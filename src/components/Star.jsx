import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Star = ({ rating, review }) => {
  // Creating an array for 5 stars
  const starrating = Array.from({ length: 5 }, (v, index) => {
    
    return (
      <span key={index} className='flex items-center text-yellow-400 mr-1'>
        {rating >= index + 1 ? (// 0 t0 4  index of the current element (0 to 4
          <FaStar  />
        ) : rating >= index + 0.5  ? ( //to display half star
          <FaStarHalfAlt  />
        ) : (
          <FaRegStar/>
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center">
      {starrating}
      <p className="ml-2 text-sm text-gray-500">{review} ( Customer Reviews )</p>
    </div>
  );
};

export default Star;

// If your rating is 3.5, the following happens:

// First iteration (index = 0):

// rating >= 1 (true, since rating = 3.5), so a full star (<FaStar />) is rendered.
// Second iteration (index = 1):

// rating >= 2 (true), so another full star (<FaStar />) is rendered.
// Third iteration (index = 2):

// rating >= 3 (true), so another full star (<FaStar />) is rendered.
// Fourth iteration (index = 3):

// rating >= 4 (false, since rating = 3.5), but rating >= 3.5 (true), so a half star (<FaStarHalfAlt />) is rendered.
// Fifth iteration (index = 4):

// rating >= 5 (false), rating >= 4.5 (false), so an empty star (<FaRegStar />) is rendered.