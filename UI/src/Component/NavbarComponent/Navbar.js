import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import Instructor from "../InstructorDashboardComponent/Instructor";
import EpInstructor from "../EpInstructorComponent/EpInstructor";
import CpInstructor from "../CpInstructorComponent/CpInstructor";
import SpInstructor from "../CpInstructorComponent/SpInstructor";
import AddCourse from "../AddCourseComponent/AddCourse";
import InstructorCourse from "../InstructorCourseComponent/InstructorCourse";
import UpdateCourse from "../UpdateCourseComponent/UpdateCourse";
import Product from "../ProductComponent/Product"
import StudentDashboard from "../StudentDashboardComponent/StudentDashboard"
import EpStudent from "../EpstudentComponent/EpStudent"
import CpStudent from "../CpStudentComponent/CpStudent"
import SpStudent from "../CpStudentComponent/SpStudent"
import ManageInstructor from "../ManageInstructorComponent/ManageInstructor"
import AdminDashboard from "../AdminDashboardComponent/AdminDashboard"
import CpAdmin from "../CpAdminComponent/CpAdmin"
import SpAdmin from "../CpAdminComponent/SpAdmin"
import ManageCourse from "../ManageCourseComponent/ManageCourse"
import EpAdmin from "../EpadminComponent/EpAdmin"
import ManageUser from "../ManageStudentComponent/ManageStudent"
import CourseDetails from "../CourseDetailsComponent/CourseDetails"
import StudentCourse from "../StudentCourseComponent/StudentCourse";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [role, setRole]= useState(localStorage.getItem('role'));
  //alert(role);
     useEffect(()=>{
        const interval = setInterval(() => {
            setRole(localStorage.getItem("role"));
          }, 200);
      
          return () => clearInterval(interval);

    },[]);

 const toggleSidebar=()=> {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("sidebar").classList.toggle("active");
}
  
  return (
    <>
    {role==="admin" && (
      <div id="ins" style={{display:"flex"}}>
      <div id="side">
        
  <div class="sidebar" id="sidebar">
  <div class="logo">E-Learning</div>

  <ul>
    <li><Link style={{color:"white"}} to='/admin'><i class="fa fa-home"></i><span>Admin Dashboard</span></Link></li>
    <li><Link style={{color:"white"}} to='/managecourse'><i class="fa fa-book"></i><span>Manage Courses</span></Link></li>
    <li><Link style={{color:"white"}} to='/manageuser'><i class="fa fa-plus"></i><span>Manage User</span></Link></li>
    <li><Link style={{color:"white"}} to='/manageinstructor'><i class="fa fa-plus"></i><span>Manage Instructor</span></Link></li>
    <li><Link style={{color:"white"}} to='/epadmin'><i class="fa fa-user"></i><span>Edit Profile</span></Link></li>
    <li><Link style={{color:"white"}} to='/cpadmin'><i class="fa fa-lock"></i><span style={{color:"white"}} >Change Password</span></Link></li>
    <li><Link style={{color:"white"}}  to='/logout'><i class="fa fa-sign-out-alt"></i><span>Logout</span></Link></li>
  </ul>
</div>

<button class="toggle-btn" onClick={toggleSidebar}>☰</button>
</div>
      <div id="inst">
        <Routes>
          <Route path='/admin' element={<AdminDashboard/>}></Route>
          <Route path='/managecourse' element={<ManageCourse/>}></Route>
        <Route path='/manageuser' element={<ManageUser/>}></Route>
      <Route path='/cpadmin' element={<CpAdmin/>}></Route>
      <Route path='/spadmin' element={<SpAdmin/>}></Route>
        <Route path='/epadmin' element={<EpAdmin/>}></Route>
        <Route path='/manageinstructor' element={<ManageInstructor/>}></Route>
        </Routes>
      </div>
      </div>

    )}
    {role==="student" && (
      <div id="ins" style={{display:"flex"}}>
      <div id="side">
        
  <div class="sidebar" id="sidebar">
  <div class="logo">E-Learning</div>

  <ul>
    <li><Link style={{color:"white"}} to='/student'><i class="fa fa-home"></i><span>Dashboard</span></Link></li>
    <li><Link style={{color:"white"}} to='/course'><i class="fa fa-book"></i><span>Courses</span></Link></li>
    <li><Link style={{color:"white"}} to='/studentcourse'><i class="fa fa-plus"></i><span>My Course</span></Link></li>
    <li><Link style={{color:"white"}} to='/epstudent'><i class="fa fa-user"></i><span>Edit Profile</span></Link></li>
    <li><Link style={{color:"white"}} to='/cpstudent'><i class="fa fa-lock"></i><span style={{color:"white"}} >Change Password</span></Link></li>
    <li><Link style={{color:"white"}}  to='/logout'><i class="fa fa-sign-out-alt"></i><span>Logout</span></Link></li>
  </ul>
</div>

<button class="toggle-btn" onClick={toggleSidebar}>☰</button>
</div>
      <div id="inst">
        <Routes>
          <Route path='/student' element={<StudentDashboard/>}></Route>
          <Route path='/course' element={<Product/>}></Route>
        <Route path='/epstudent' element={<EpStudent/>}></Route>
      <Route path='/cpstudent' element={<CpStudent/>}></Route>
      <Route path='/spstudent' element={<SpStudent/>}></Route>
         <Route path='/studentcourse' element={<StudentCourse/>}></Route> 
        <Route path='/updatecourse' element={<UpdateCourse/>}></Route>
        <Route path='/coursedetails/:id' element={<CourseDetails/>}></Route>
        </Routes>
      </div>
      </div>
            
    )}
    {role==="instructor" && (
      <div id="ins" style={{display:"flex"}}>
      <div id="side">
        
  <div class="sidebar" id="sidebar">
  <div class="logo">E-Learning</div>

  <ul>
    <li><Link style={{color:"white"}} to='/instructor'><i class="fa fa-home"></i><span>Dashboard</span></Link></li>
    <li><Link style={{color:"white"}} to='/instructorcourse'><i class="fa fa-book"></i><span>Courses</span></Link></li>
    <li><Link style={{color:"white"}} to='/addcourse'><i class="fa fa-plus"></i><span>Create Course</span></Link></li>
    <li><Link style={{color:"white"}} to='/epinstructor'><i class="fa fa-user"></i><span>Edit Profile</span></Link></li>
    <li><Link style={{color:"white"}} to='/cpinstructor'><i class="fa fa-lock"></i><span style={{color:"white"}} >Change Password</span></Link></li>
    <li><Link style={{color:"white"}}  to='/logout'><i class="fa fa-sign-out-alt"></i><span>Logout</span></Link></li>
  </ul>
</div>

<button class="toggle-btn" onClick={toggleSidebar}>☰</button>
</div>
      <div id="inst">
        <Routes>
          <Route path='/addcourse' element={<AddCourse/>}></Route>
          <Route path='/instructor' element={<Instructor/>}></Route>
        <Route path='/epinstructor' element={<EpInstructor/>}></Route>
      <Route path='/cpinstructor' element={<CpInstructor/>}></Route>
      <Route path='/spinstructor' element={<SpInstructor/>}></Route>
        <Route path='/instructorcourse' element={<InstructorCourse/>}></Route>
        <Route path='/updatecourse' element={<UpdateCourse/>}></Route>
        </Routes>
      </div>
      </div>
    )}
    {!role && (
      <div className="container-fluid">
      <div className="row border-top px-xl-5">

        {/* LEFT SIDEBAR */}
        <div className="col-lg-3 d-none d-lg-block">
          
          {/* Toggle Sidebar */}
          <div
            className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
            onClick={() => setShowMenu(!showMenu)}
            style={{ height: "67px", padding: "0 30px", cursor: "pointer" }}
          >
            <h5 className="text-primary m-0">
              <i className="fa fa-book-open mr-2"></i>Subjects
            </h5>
            <i className="fa fa-angle-down text-primary"></i>
          </div>

          {/* Sidebar Menu */}
          {showMenu && (
            <nav
              className="position-absolute navbar navbar-light bg-light"
              style={{ width: "calc(100% - 30px)", zIndex: 9 }}
            >
              <div className="navbar-nav w-100">

                {/* Dropdown */}
                <div className="nav-item">
                  <div
                    className="nav-link d-flex justify-content-between"
                    onClick={() => setShowDropdown(!showDropdown)}
                    style={{ cursor: "pointer" }}
                  >
                    Web Design
                    <i className="fa fa-angle-down mt-1"></i>
                  </div>

                  {showDropdown && (
                    <div className="bg-secondary">
                      <Link to="" className="dropdown-item">HTML</Link>
                      <Link to="" className="dropdown-item">CSS</Link>
                      <Link to="" className="dropdown-item">jQuery</Link>
                    </div>
                  )}
                </div>

                <Link to="" className="nav-item nav-link">Apps Design</Link>
                <Link to="" className="nav-item nav-link">Marketing</Link>
                <Link to="" className="nav-item nav-link">Research</Link>
                <Link to="" className="nav-item nav-link">SEO</Link>
              </div>
            </nav>
          )}
        </div>

        {/* RIGHT NAVBAR */}
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            
            <Link to="" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0">
                <span className="text-primary">E</span>COURSES
              </h1>
            </Link>

            {/* Toggle Mobile Navbar */}
            <button
              type="button"
              className="navbar-toggler"
              onClick={() => setShowNav(!showNav)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className={`collapse navbar-collapse ${showNav ? "show" : ""}`}>
              <div className="navbar-nav py-0 ml-auto ">
                <Link to="/" className="nav-item nav-link ">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/course" className="nav-item nav-link">Courses</Link>
                {/* <Link to="/testimonial" className="nav-item nav-link">Testimonial</Link> */}
                <Link to="/blog" className="nav-item nav-link">Blog</Link>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>

              <Link
                className="btn btn-primary py-2 px-4 ml-auto d-lg-block"
                to="/login"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>

      </div>
    </div>
    )}

    
  </>
  );
}

export default Navbar;