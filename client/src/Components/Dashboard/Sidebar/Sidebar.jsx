import React from 'react'

import "./Sidebar.scss"
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-top">
            <span className="logo">GPA Calculator</span>
        </div>
        <div className="sidebar-center">
            <ul>
                <li>Dashboard</li>
            </ul>
            <ul>
                <li>Dashboard</li>
            </ul>
            <ul>
                <li>Dashboard</li>
            </ul>
        </div>
        <div className="sidebar-bottom">Color Options</div>

      </div>
    </div>
  )
}

export default Sidebar
