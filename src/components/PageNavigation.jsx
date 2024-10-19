import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNavigation = ({ title }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-start items-center text-gray-600'>
        <span onClick={handleNavigate} className='cursor-pointer'>
          Home
        </span>
        / {title}
      </div>
      <div className='w-full border-b border-gray-300 mt-2'></div>
    </div>
  );
}

export default PageNavigation;
