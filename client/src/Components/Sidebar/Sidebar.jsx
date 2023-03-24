import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import "./Sidebar.css";

import Logo from "../../Assets/Images/logo.png";
const Sidebar = () => {
  return (
    <div>
      <nav className="sidebar">
        <header>
          <div className="sidebar-image-text">
            <span className="sidebar-image">
              <img src={Logo} alt="missing" />
            </span>

            <div className="text header-text">
              <span className="title">GPA CALCULATOR</span>
              <span className="sub-title">@username</span>
            </div>
          </div>
          {/* <HiOutlineChevronRight size={1} className='toggle'/> */}
          {/* <i className="bx bx-chevron-right toggle"></i> */}
          <i class="bx bx-chevron-right toggle"></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i class="bx bx-home-alt nav-item-icon"></i>
                  <span className="text nav-item-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i class="bx bx-bookmarks nav-item-icon"></i>
                  <span className="text nav-item-text">Results</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i class="bx bx-book-alt nav-item-icon"></i>
                  <span className="text nav-item-text">Subjects</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i class="bx bx-time-five nav-item-icon"></i>
                  <span className="text nav-item-text">Schedule a plan</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i class="bx bx-paper-plane nav-item-icon"></i>
                  <span className="text nav-item-text">Credits</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i class="bx bx-logo-out nav-item-icon"></i>
                <span className="text nav-item-text">Logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon nav-item-icon moon"></i>
                <i className="bx bx-sun nav-item-icon sun"></i>
              </div>
              <span className="mode-text text">Dark Mode</span>
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
