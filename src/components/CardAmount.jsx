import React from 'react';

const CardAmount = ({ inc, dec, amount }) => {
  return (
    <>
    <div className='flex items-center'>
    <p className='text-lg font-medium'>Quantity: </p>
      <div className='flex items-center justify-center space-x-4 px-3 m-1 bg-slate-200  rounded-md '>
        
        
        <button 
          onClick={dec}
          className=' text-blue-900 font-thin text-3xl rounded-full w-8  flex items-center justify-center '>
          -
        </button>
        
        <p className='text-xl font-semibold'>{amount}</p>
        
        <button 
          onClick={inc}
          className=' text-blue-900 font-thin rounded-full w-8 text-3xl flex items-center justify-center'>
          +
        </button>
      </div>
      </div>
    </>
  );
};

export default CardAmount;
