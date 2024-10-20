import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNavigation = ({ title }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  }

  return (
    <div className='  hidden sm:flex sm:flex-col w-full'>
      <div className='sm:flex sm:justify-start sm:items-center text-gray-600'>
        <span onClick={handleNavigate} className='cursor-pointer'>
          Home
        </span>
        / {title}
      </div>
      <div className='w-full border-b border-gray-300 sm:mt-2'></div>

    </div>
  );
}

export default PageNavigation;
