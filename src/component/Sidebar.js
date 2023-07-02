import React from "react";
import { Link, useLocation } from "react-router-dom";
import  "./Styles/Sidenav.css";


function Sidebar() {
  let location = useLocation();
  let path = location.pathname;
  return (
    
    <div className="sidenav h-[95%] mt-6 w-full p-12  pt-80">
      {/* -------- here the routing of side navbar ------------------- */}
      <ul>
        <li className="sidenavlist">
          <Link
            to={`profile`}
            className={path.includes("profile") ? "activeState": "notActive"}
          >
            Profile
          </Link>
        </li>
        <hr  className="hrcolor" />
        <li className="sidenavlist">
          <Link
            to={`posts`}
            className={path.includes("posts") ? "activeState" : "notActive"}
          >
            Post
          </Link>
        </li>
        <hr  className="hrcolor" />

        <li className="sidenavlist">
          <Link
            to={`gallery`}
            className={path.includes("gallery") ? "activeState" : "notActive"}
          >
            Gallery
          </Link>
        </li>
        <hr className="hrcolor"/>

        <li className="sidenavlist">
          <Link
            to={`todo`}
            className={path.includes("todo") ? "activeState" : "notActive"}
          >
            Todo
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
