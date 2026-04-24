
import './App.css';
import Header from './Component/HeaderComponent/Header';
import Navbar from './Component/NavbarComponent/Navbar';

import Product from './Component/ProductComponent/Product';
import Footer from './Component/FooterComponent/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/HomeComponent/Home';
import About from './Component/AboutComponent/About';
import Login from './Component/LoginComponent/Login';
import Contact from './Component/ContactComponent/Contact';
import Registration from './Component/RegistrationComponent/Registration';
import Testimonial from './Component/Testimonial/Testimonial';
import Blogs from './Component/Blogs/Blogs';
import AdminDashboard from './Component/AdminDashboardComponent/AdminDashboard';
import StudentDashboard from './Component/StudentDashboardComponent/StudentDashboard';
import Logout from './Component/LogoutComponent/Logout';
import ForgotPassword from './Component/ForgotPasswordComponent/ForgotPassword';
import ConfirmPassword from './Component/ForgotPasswordComponent/ConfirmPassword';
import Verify from './Component/verifyUserComponent/verify';
import ManageStudent from './Component/ManageStudentComponent/ManageStudent';
import ManageInstructor from './Component/ManageInstructorComponent/ManageInstructor';
import EpStudent from './Component/EpstudentComponent/EpStudent';
import Instructor from './Component/InstructorDashboardComponent/Instructor';
import CpStudent from './Component/CpStudentComponent/CpStudent';
import CpInstructor from './Component/CpInstructorComponent/CpInstructor'
import SpInstructor from './Component/CpInstructorComponent/SpInstructor'
import EpInstructor from './Component/EpInstructorComponent/EpInstructor';
import SpStudent from './Component/CpStudentComponent/SpStudent'
import CpAdmin from './Component/CpAdminComponent/CpAdmin';
import EpAdmin from './Component/EpadminComponent/EpAdmin';
import SpAdmin from './Component/CpAdminComponent/SpAdmin';
import CourseDetails from './Component/CourseDetailsComponent/CourseDetails';
import ManageCourse from './Component/ManageCourseComponent/ManageCourse';
import InstructorCourse from './Component/InstructorCourseComponent/InstructorCourse';

function App() {
  return (
    <>
    <Header/> 
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/course' element={<Product/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/blog' element={<Blogs/>}></Route>
      <Route path='/testimonial' element={<Testimonial/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/forgotPassword/' element={<ForgotPassword/>}></Route>
      <Route path='/resetPassword/:email' element={<ConfirmPassword/>}></Route>
      <Route path='/verify/:id' element={<Verify/>}></Route>
      
      
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
