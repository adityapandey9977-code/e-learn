import { useEffect, useState } from 'react';
import './Header.css';
import Auth from '../AuthComponent/Auth';

function Header(){
    const [role,setRole] = useState(localStorage.getItem('role')); 
 //alert(role);
    useEffect(()=>{
        const interval = setInterval(() => {
            setRole(localStorage.getItem("role"));
            
          }, 200);
      
          return () => clearInterval(interval);

    },[]);

    return (
        <>

        <Auth/>
        {role==='admin'&&(<></>)}
        {role==='instructor'&&(<></>)}
        {role==='student'&&(<></>)}
        {!role&&( <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
            <div className="col-lg-3">
                <a href="" className="text-decoration-none">
                    <h1 className="m-0"><span className="text-primary">E</span>-Learning</h1>
                </a>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    
                    <i style={{fontSize:"2em"}} className="text-primary fas fa-map-marker-alt mr-3"></i>
                    
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                        <small>IT Park, Inodre, Madhya Pradesh, India</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                        <small>addevelpoers@gmail.com</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                        <small>+91 345 6789</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )}
        </>   
    );
}

export default Header;