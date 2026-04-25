import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {


  const toggleSidebar=()=> {
  document.getElementById("sidebar").classNameList.toggle("collapsed");
  document.getElementById("sidebar").classNameList.toggle("active");
}

  return (
    <>
    <div className="sidebar" id="sidebar">
  <div className="logo">E-Learn</div>

  <ul>
    <li><i className="fa fa-home"></i><span>Dashboard</span></li>
    <li><i className="fa fa-book"></i><span>Courses</span></li>
    <li><i className="fa fa-plus"></i><span>Create Course</span></li>
    <li><i className="fa fa-video-camera"></i><span>Lectures</span></li>
    <li><i className="fa fa-user"></i><span>Profile</span></li>
    <li><i className="fa fa-sign-out"></i><span>Logout</span></li>
  </ul>
</div>

<button className="toggle-btn" onClick={toggleSidebar}>☰</button>
    </>
  );
}

export default Sidebar;
