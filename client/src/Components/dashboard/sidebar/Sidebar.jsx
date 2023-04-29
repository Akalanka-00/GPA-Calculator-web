import React from 'react'
import {FaTachometerAlt, FaRegSun, FaChevronRight, FaProjectDiagram} from "react-icons/fa"
import {GiSkills} from "react-icons/gi"
import {IoMdSchool} from "react-icons/io"
import {RiContactsFill} from "react-icons/ri"
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate();
  
  return (
    <div className='bg-gray-900 h-screen px-5'>
      <div className='px-[15px] py-10 flex items-center justify-center border-b border-gray-600'>
        <h1 className='text-white text-base leading-[24px] font-extrabold cursor-pointer '>Admin Panel</h1>
      </div>
      <div className='flex items-center gap-[15px] py-[20px] border-b-[1px]  border-gray-600 cursor-pointer' onClick={()=>{navigate("/dashboard")}}>
        <FaTachometerAlt color='white'/>
        <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
      </div>
      <div className='pt-[15px] border-b-[1px] border-gray-600'>
        <p className='text-[12px] font-extrabold leading-[16px] text-white/[0.4]'>GPA Settings</p>


        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={()=>{navigate("/dashboard/myGPA")}}>
            <div className='flex items-center gap-[10px]'>
            <FaProjectDiagram color='white'/>
        <p className='text-[14px] leading-[20px] font-normal text-white'>My GPA</p>            
        </div>
        <FaChevronRight color='white'/>
        </div>

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={()=>{navigate("/dashboard/subjects")}}>
            <div className='flex items-center gap-[10px]'>
            <GiSkills color='white'/>
        <p className='text-[14px] leading-[20px] font-normal text-white'>My Subjects</p>            
        </div>
        <FaChevronRight color='white'/>
        </div>

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
            <IoMdSchool color='white'/>
        <p className='text-[14px] leading-[20px] font-normal text-white'>Education & Experience</p>            
        </div>
        <FaChevronRight color='white'/>
        </div>

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
            <RiContactsFill color='white'/>
        <p className='text-[14px] leading-[20px] font-normal text-white'>Contact Info</p>            
        </div>
        <FaChevronRight color='white'/>
        </div>

       
      </div>
    </div>
  )
}

export default Sidebar
