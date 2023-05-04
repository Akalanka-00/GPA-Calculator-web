import React from 'react'
import Sidebar from './sidebar/Sidebar'
import DashboardView from './DashboardView'
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className='flex bg-gray-800 text-white'>
      <div className='basis-[14%] h-[100vh]'>
        <Sidebar/>
      </div>
      <div className='basis-[86%] h-[100vh] overflow-scroll border border-gray-600'>
        <DashboardView/>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
