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
                alert(user.role);
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
        <div class="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div class="container py-5" >
            <div class="row align-items-center" style={{justifyContent:"end",display:"flex"}} >
                
                <div class="col-lg-5 " >
                    <div class="card border-0">
                        <div class="card-header bg-light text-center p-4">
                            <h1 class="m-0">Login to your Account</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-primary p-5">
                            <form class="col"  onSubmit={loginHandle}>
                                <div class="form-group">
                                    <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control border-0 p-4" placeholder="Your email" required/>
                                </div>
                                <div class="form-group">
                                    <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control border-0 p-4" placeholder="Your password" required/>
                                </div>
                                
                                <div>
                                    <button class="btn btn-dark btn-block border-0 py-3" type="submit">Login</button>
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