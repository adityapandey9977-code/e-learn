import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth(){
    const navigate=useNavigate();
    
    useEffect(()=>{
        const path=window.location.pathname;
        if(path=="/admin"||path=="/epadmin"||path=="/cpadmin"||path=="/spadmin"||path=="/manageuser"||path=="/managecourse"||path=="/manageinstructor")
        {
            if(localStorage.getItem('role')!="admin" || !localStorage.getItem('token'))
            {
                navigate("/logout");
            }
        }
        else if(path=="/student"||path=="/studentallcourse"||path=="/spstudent"||path=="/epstudent"||path=="/cpstudent"||path=="/studentcourse")
        {
            if(localStorage.getItem('role')!="student" || !localStorage.getItem('token'))
            {
                navigate("/logout");
            }
        }
        else if(path=="/instructor"||path=="/addcourse"||path=="/spinstructor"||path=="/epinstructor"||path=="/cpinstructor"||path=="/instructorcourse"||path=="/updatecourse")
        {
            if(localStorage.getItem('role')!="instructor" || !localStorage.getItem('token'))
            {
                navigate("/logout");
            }
        }
        else
        {
            if(localStorage.getItem('role')=='admin')
            {
                navigate('/admin');
            }
            else if(localStorage.getItem('role')=='student')
            {
                navigate('/student');
            }
            else if(localStorage.getItem('role')=='instructor')
            {
                navigate('/instructor');
            }
            else
            {
                navigate(path);
            }
        }

    },[])


}

export default Auth;