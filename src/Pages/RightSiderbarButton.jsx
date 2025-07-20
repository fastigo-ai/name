import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebarButtons = () => {
//   const handleEnquery =()=>{
//     navigate('/enquery-form');
//   }
  return (
    <div className="fixed right-0 top-1/2 z-50 flex flex-col items-center space-y-2">
      <Link to="/enquery-form">
      <button  className="bg-blue-400 text-white px-4 py-4 transform -rotate-90 hover:bg-blue-500">
        Enquery
      </button>
      </Link>
    </div>
  );
};

export default RightSidebarButtons;
