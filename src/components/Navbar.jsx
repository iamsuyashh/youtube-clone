import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineVideoCamera, AiOutlineBell } from "react-icons/ai";
import { MdApps } from "react-icons/md";
import Sidebar from './Sidebar';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div className="navbar flex items-center justify-between p-4 bg-[#212121] text-white">
        <div className="flex items-center">
          <RxHamburgerMenu className='text-2xl mr-6 cursor-pointer' onClick={toggleSidebar} />
          <FaYoutube className='text-3xl text-red-600' />
          <span className='text-2xl font-bold ml-2 cursor-pointer'>YouTube</span>
        </div>
        
        <div className="hidden md:flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-l-full bg-[#212121] border border-gray-700 text-white focus:outline-none focus:border-red-600"
          />
          <button className="p-2.5 bg-[#212121] border border-gray-700 rounded-r-full hover:bg-gray-600">
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
        
        <div className="flex items-center md:hidden">
          <AiOutlineSearch className='text-2xl cursor-pointer' />
        </div>

        <div className="flex items-center">
          <AiOutlineVideoCamera className='text-2xl mr-4 cursor-pointer hidden md:block' />
          <MdApps className='text-2xl mr-4 cursor-pointer hidden md:block' />
          <AiOutlineBell className='text-2xl mr-4 cursor-pointer hidden md:block' />
          <div className="w-8 h-8 marker:bg-[#212121] rounded-full cursor-pointer hidden md:block"><img className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbn7ohaA0u5ttRyf3wAQyyqRJCQsELLs1Mgw&s" alt="" /></div>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Navbar;
