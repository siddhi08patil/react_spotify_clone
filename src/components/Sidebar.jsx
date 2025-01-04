import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className='w-[25%] h-full p-2 flex flex-col gap-4 text-white hiddden lg:flex'>
      <div className='bg-[#121212] rounded p-4 flex flex-col gap-3'>
        <div onClick={()=>{navigate('/')}} className='flex items-center gap-3 pl-2 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt='Home Icon' />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-2 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt='Search Icon' />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] rounded p-4 flex-1 flex flex-col'>
        <div className='flex items-center gap-3 cursor-pointer'>
          <img className='w-8' src={assets.stack_icon} alt='Library Icon' />
          <p className='font-semibold'>Your Library</p>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt=''/>
            <img className='w-5' src={assets.plus_icon} alt=''/>
        </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create your First Playlist</h1>
            <p className='font-light'>Its Easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
            <h1>Lets find some podcast to follow</h1>
            <p className='font-light'>we'll keep you update on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>browse podcast</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
