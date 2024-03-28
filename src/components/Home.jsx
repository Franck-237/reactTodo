import React, { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Home = () => {

    const [nav, setNav] = useState(false);

  return (
    <div>
        <div>
            <div className='md:hidden' onClick={()=>setNav(!nav)} >
                {
                    nav ? 
                    <MdClose  className='h-[25px] w-[25px] text-orange-500'/>
                    :
                    <RiMenu2Fill className='h-[25px] w-[25px] text-orange-500'/>
                }
            </div>
                {
                    nav ?
                        <ul className='absolute right-0 flex flex-col items-center pt-10 gap-5 h-[50vh] w-[80%] bg-slate-700 text-[16px] font-medium transition-all duration-700'>
                            <li>
                                <Link to= '/' className='hover:text-orange-500 text-white'>TodoList</Link>
                            </li>
                            <li>
                                <Link to= '/add-todo' className='hover:text-orange-500 text-white'>Add Todo</Link>
                            </li>
                            <li className='border border-orange-500 bg-white rounded-2xl px-3 py-1 hover:bg-slate-500 hover:text-orange-500 hover:border-white w-[100px] text-gray-900 text-center'>
                                <Link to= '/login' className=''>Log In</Link>
                            </li>
                            <li className='border border-orange-500 bg-white rounded-2xl px-3 py-1 hover:bg-slate-500 hover:text-orange-500 hover:border-white w-[100px] text-gray-900 text-center'>
                                <Link to= '/signup' className=''>Sign Up</Link>
                            </li>
                        </ul>
                    :
                        <ul className='hidden md:flex justify-between items-center gap-5 text-gray-900 font-medium text-[12px] md:text-[16px] transition-all duration-700'>
                            <li>
                                <Link to= '/' className='hover:text-orange-500'>TodoList</Link>
                            </li>
                            <li>
                                <Link to= '/add-todo' className='hover:text-orange-500'>Add Todo</Link>
                            </li>
                            <li className='border border-orange-500 bg-white rounded-2xl px-3 py-1 hover:bg-slate-500 hover:text-orange-500 hover:border-white'>
                                <Link to= '/login' className=''>Log In</Link>
                            </li>
                            <li className='border border-orange-500 bg-white rounded-2xl px-3 py-1 hover:bg-slate-500 hover:text-orange-500 hover:border-white'>
                                <Link to= '/signup' className=''>Sign Up</Link>
                            </li>
                        </ul>      
                }
        </div>
    </div>
  )
};

export default Home;