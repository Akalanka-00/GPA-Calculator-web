import "./sidebar.scss";

import { Link } from "react-router-dom";
import dataset from "./Sidebar_services";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">GPA Calculator</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <span>Dashboard</span>
          </li>
          <p className="title">Serives</p>
          {dataset.map((nav_item) => (
            <Link to={nav_item.path} style={{ textDecoration: "none" }}>
              <li>
                <span>{nav_item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="bottom">
       

      </div>
    </div>
  );
};

export default Sidebar;
