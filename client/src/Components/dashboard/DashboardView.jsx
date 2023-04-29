import React, { useState } from 'react'
import { FaRegBell, FaEnvelope } from "react-icons/fa"
import { Profile } from '../../Assets/Images';
import { logoutUser } from '../../Helper/helper';

const DashboardView = () => {

    const [open, setOpen] = useState(false);

    const showDropdown = () => {
        setOpen(!open);
    }
  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px] bg-gray-900' onClick={showDropdown}>
        <h1 className='text-indigo-600 text-2xl leading-[24px] font-bold'> Hello! <span className='px-5 text-white'>Shenal Akalanka</span></h1>
      <div className='flex items-center gap-[15px] relative right-2'>
        <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px] '>
            <FaRegBell color='white'/>
            <FaEnvelope color='white'/>
        </div>
        <div className='flex items-center gap-[15px] relative'>
            <p className='text-white'>Shenal Akalanka</p>
            <div className='h-[50px] 2-[50px] rounded-full bg-green-500 cursor-pointer flex items-center justify-center relative' onClick={showDropdown}>
                <img src = {Profile} alt='' width={"50px"}/>
            </div>

            { open &&
                <div className="bg-gray-800 border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px]">
                    <p className='curser-pointer hover:text-green-500 font-semibold py-1'>Profile</p>
                    <p className='curser-pointer hover:text-green-500 font-semibold py-1'>Settings</p>
                    <p className='curser-pointer hover:text-green-500 font-semibold py-1' onClick={logoutUser}>Log Out</p>
                </div>
            }
        </div>
      </div>
    </div>
  )
}

export default DashboardView
