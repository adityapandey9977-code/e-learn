import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { apiurluser } from '../../ApiUrl';
import axios from 'axios';
import { useState } from 'react';
function Login(){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[outPut, setOutput]=useState();
    const navigate=useNavigate();
    const loginHandle =(e)=>{
        e.preventDefault();
            const condition={email:email,password:password};
            //alert(condition);
            axios.post(apiurluser+"login",condition).then((response)=>{
                //alert(response.data.message);
            const user = response.data.user;  
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("_id",user._id);
          localStorage.setItem("name",user.name);
          localStorage.setItem("email",user.email);
          localStorage.setItem("mobile",user.mobile);
          localStorage.setItem("address",user.address);
          localStorage.setItem("city",user.city);
          localStorage.setItem("gender",user.gender);
          localStorage.setItem("role",user.role);
          localStorage.setItem("status",user.status);
          localStorage.setItem("info",user.info);
                //alert(user.role);
          if(user.role=="student")
            navigate('/student');
          else if(user.role=="instructor")
            navigate('/instructor');
          else
            navigate('/admin');

            }).catch((e)=>{alert(e.response.data.message)})
    }

    return (
        <>
        {outPut}
        <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div className="container py-5" >
            <div className="row align-items-center" style={{justifyContent:"end",display:"flex"}} >
                
                <div className="col-lg-5 " >
                    <div className="card border-0">
                        <div className="card-header bg-light text-center p-4">
                            <h1 className="m-0">Login to your Account</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-primary p-5">
                            <form className="col"  onSubmit={loginHandle}>
                                <div className="form-group">
                                    <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control border-0 p-4" placeholder="Your email" required/>
                                </div>
                                <div className="form-group">
                                    <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control border-0 p-4" placeholder="Your password" required/>
                                </div>
                                
                                <div>
                                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Login</button>
                                <Link style={{justifyContent:"end", display:"flex"}} className='register-t register-link' to="/forgotPassword">Forgot password</Link><br/>
                                </div>
                <div className="register-t display-flex">
  New user?  &nbsp;&nbsp;   <Link to="/registration" className="register-link">Register Now</Link>
</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

        </>
    );
}

export default Login;