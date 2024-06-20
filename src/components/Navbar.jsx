import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineVideoCamera, AiOutlineBell } from "react-icons/ai";
import { MdApps } from "react-icons/md";
import Sidebar from './Sidebar';
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";
import {useAppDispatch,useAppSelector} from "../hooks/useApp";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos);
      dispatch(getSearchPageVideos(false));
    }
  };

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
        
        <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={e=>dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <AiOutlineSearch className="text-xl " />
            </button>
          </div>
        </form>
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
