import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import "./DashboardContainer.scss"

const DashboardContainer = () => {
  return (
    <div className='dashboard-container'>
      <Sidebar/>
      <div className="home-container">Container</div>
    </div>
  )
}

export default DashboardContainer
