import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div className='bg-purple-400 p-4 w-full'>
      <div className='py-[12px] max-w-[1240px]   mx-auto flex justify-between items-center'>
        <div className='text-3xl font-bold'>
          Codeholicks
        </div>
        {
            toggle?
            <IoMdClose  onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden'  />
            :
            <IoMdMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden' />
        }
        
        
        <ul className='hidden  md:flex text-white justify-end space-x-5'>
          <li className='cursor-pointer hover:text-slate-600'>Home</li>
          <li className='cursor-pointer hover:text-slate-600'>Company</li>
          <li className='cursor-pointer hover:text-slate-600'>Resources</li>
          <li className='cursor-pointer hover:text-slate-600'>About</li>
          <li className='cursor-pointer hover:text-slate-600'>Contact</li>
        </ul>

        {/* esponsive menu */}
        <ul className={` duration-300 md:hidden fixed text-white bg-black left-0 top-[92px] w-full h-screen ${toggle ? 'left-0' : 'left-[-100%]'}`}>

          <li className='p-5'>Home</li>
          <li className='p-5'>Company</li>
          <li className='p-5'>Resources</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

