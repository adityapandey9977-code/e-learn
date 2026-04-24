import './ForgotPassword.css';
import { Link, useNavigate } from 'react-router-dom';
import { apiurluser } from '../../ApiUrl';
import axios from 'axios';
import { useState } from 'react';
function ForgotPassword(){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[outPut, setOutput]=useState();
    const navigate=useNavigate();
    const passHandle =(e)=>{
        e.preventDefault();
            const condition={email:email};
            //alert(condition);
            axios.post(apiurluser+"confirmPassword",condition).then((response)=>{
                alert(response.data.message);
            
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
                            <h1 class="m-0">Please insert your registered email</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-primary p-5">
                            <form class="col"  onSubmit={passHandle}>
                                <div class="form-group">
                                    <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control border-0 p-4" placeholder="Your email" required/>
                                </div>
                                
                                <div>
                                    <button class="btn btn-dark btn-block border-0 py-3" type="submit">Submit</button>
                                
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

export default ForgotPassword;