import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth(){
    const navigate=useNavigate();
    
    useEffect(()=>{
        const path=window.location.pathname;
        if(path=="/admin")
        {
            if(localStorage.getItem('role')!="admin" || !localStorage.getItem('token'))
            {
                navigate("/logout");
            }
        }
        else if(path=="/student")
        {
            if(localStorage.getItem('role')!="Student" || !localStorage.getItem('token'))
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
            else
            {
                navigate(path);
            }
        }

    },[])


}

export default Auth;