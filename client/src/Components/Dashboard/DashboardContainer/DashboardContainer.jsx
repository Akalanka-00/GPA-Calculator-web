import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../TopNavBar/Navbar'

import "./DashboardContainer.scss"

const DashboardContainer = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboard-container">
        <Navbar/>
      </div>
    </div>
  )
}

export default DashboardContainer
