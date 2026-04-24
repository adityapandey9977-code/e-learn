import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {


  const toggleSidebar=()=> {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("sidebar").classList.toggle("active");
}

  return (
    <>
    <div class="sidebar" id="sidebar">
  <div class="logo">E-Learn</div>

  <ul>
    <li><i class="fa fa-home"></i><span>Dashboard</span></li>
    <li><i class="fa fa-book"></i><span>Courses</span></li>
    <li><i class="fa fa-plus"></i><span>Create Course</span></li>
    <li><i class="fa fa-video-camera"></i><span>Lectures</span></li>
    <li><i class="fa fa-user"></i><span>Profile</span></li>
    <li><i class="fa fa-sign-out"></i><span>Logout</span></li>
  </ul>
</div>

<button class="toggle-btn" onClick={toggleSidebar}>☰</button>
    </>
  );
}

export default Sidebar;
