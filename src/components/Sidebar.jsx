// Sidebar.js
import React from 'react';
import { AiOutlineHome, AiOutlineHistory, AiOutlinePlaySquare, AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { FiDownload, FiScissors } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GiShorts } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleSidebar}>
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#212121] text-white p-4 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">Menu</span>
          <IoClose className='text-xl cursor-pointer' onClick={toggleSidebar} />
        </div>
        <nav>
          <a href="#home" className="flex items-center mb-4 hover:text-gray-300">
            <AiOutlineHome className='text-xl mr-4' />
            <span>Home</span>
          </a>
          <a href="#shorts" className="flex items-center mb-4 hover:text-gray-300">
            <GiShorts className='text-xl mr-4' />
            <span>Shorts</span>
          </a>
          <a href="#subscriptions" className="flex items-center mb-4 hover:text-gray-300">
            <MdOutlineSubscriptions className='text-xl mr-4' />
            <span>Subscriptions</span>
          </a>
          <hr className="my-4 border-gray-700" />
          <a href="#channel" className="flex items-center mb-4 hover:text-gray-300">
            <AiOutlinePlaySquare className='text-xl mr-4' />
            <span>Your channel</span>
          </a>
          <a href="#history" className="flex items-center mb-4 hover:text-gray-300">
            <AiOutlineHistory className='text-xl mr-4' />
            <span>History</span>
          </a>
          <a href="#playlists" className="flex items-center mb-4 hover:text-gray-300">
            <BsCollectionPlay className='text-xl mr-4' />
            <span>Playlists</span>
          </a>
          <a href="#videos" className="flex items-center mb-4 hover:text-gray-300">
            <AiOutlinePlaySquare className='text-xl mr-4' />
            <span>Your videos</span>
          </a>
          <a href="#watch-later" className="flex items-center mb-4 hover:text-gray-300">
            <AiOutlineClockCircle className='text-xl mr-4' />
            <span>Watch Later</span>
          </a>
          <a href="#liked-videos" className="flex items-center mb-4 hover:text-gray-300">
            <AiOutlineLike className='text-xl mr-4' />
            <span>Liked videos</span>
          </a>
          <a href="#downloads" className="flex items-center mb-4 hover:text-gray-300">
            <FiDownload className='text-xl mr-4' />
            <span>Downloads</span>
          </a>
          <a href="#clips" className="flex items-center mb-4 hover:text-gray-300">
            <FiScissors className='text-xl mr-4' />
            <span>Your clips</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
