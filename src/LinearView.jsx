import { useFilterContext } from './context/Filtercontext';
import { NavLink } from "react-router-dom";
import React from 'react';

const LinearView = () => {
  const { all_products } = useFilterContext();

  return (
    <div className='flex justify-center items-center'>

      <div className='container max-w-2xl mx-auto p-4'>
        <div className='grid grid-cols-1 gap-4'>
          {all_products.map((curElem) => (
            <div key={curElem.id} className='flex items-center p-4 border-b border-gray-300'>
              <img 
                src={curElem.image} 
                alt={curElem.name} 
                className='sm:w-2/6 w-2/5 sm:h-full h-full object-cover mr-4'
              />

              <div className='flex flex-col'>
                <h2 className='sm:text-xl font-semibold'>{curElem.name}</h2>
                <p className='text-gray-500'>{curElem.category}</p>
                <p className='text-green-700 font-bold sm:mt-2'>${curElem.price}</p>
                <p className='text-gray-800 sm:block hidden'>{curElem.description.slice(0, 110)}...</p>
                <p className='text-gray-800 text-xs sm:hidden block'>{curElem.description.slice(0, 65)}...</p>

                <NavLink to={`/singleproduct/${curElem.id}`}>
                  <button className='bg-blue-500 mt-2 text-white sm:text-xl text-sm px-2 py-1 rounded-md'>
                    Read More
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinearView;
