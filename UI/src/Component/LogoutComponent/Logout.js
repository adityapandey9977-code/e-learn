import './Logout.css';
import Login from '../LoginComponent/Login';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Logout(){
    const navigate=useNavigate();
    useEffect(()=>{
        //alert("logout");
        localStorage.clear();
        navigate('/login');
    },[])
    

    return (
        

        <>
        
        </> 
     );
}

export default Logout;