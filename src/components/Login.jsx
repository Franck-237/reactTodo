import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
        <div className='container mx-auto px-5 pt-20'>
            <div className='flex flex-col items-center pt-10 bg-white border border-white rounded-xl shadow-lg shadow-orange-300'>
                <a href="" className='w-[80%]'>
                    <div className='flex justify-center items-center gap-3 border border-1 border-gray-400 rounded-xl px-2 py-1'>
                        <FcGoogle  className='w-[20px] h-[20px]'/>
                        <p className='text-[16px] font-medium text-gray-800'>Log In With Google</p>
                    </div>
                </a>
                <p className='py-5 text-[16px] font-medium'>Or</p>
                <form action="" className='pb-10 flex flex-col justify-center items-center'>
                    <input type="text" placeholder='Username' className='border border-1 px-2 py-1 mb-3 rounded-xl w-[280px] border-gray-400'/>
                    <input type="email" placeholder='Usermail' className='border border-1 px-2 py-1 mb-3 rounded-xl w-[280px] border-gray-400'/>
                    <input type="password" placeholder='Password' className='border border-1 px-2 py-1 mb-3 rounded-xl w-[280px] border-gray-400'/>
                    <a href="" className='text-gray-800 font-medium hover:text-orange-500 text-[16px]'>Forgot Password ?</a>
                    <button className='border border-1 rounded-2xl bg-orange-500 text-white text-[16px] font-medium px-10 py-1 mt-3'>Log In</button>
                </form>
                <p className='text-gray-800 font-medium text-[16px] pb-10'>Don't have an account? <a href="" className=' hover:text-orange-500'>Sign Up</a></p>
            </div>
        </div>
    </div>
  )
};

export default Login;