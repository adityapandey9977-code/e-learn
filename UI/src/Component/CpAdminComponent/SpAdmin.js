import './CpAdmin.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiurluser } from '../../ApiUrl';
import axios from 'axios';
import { useState } from 'react';
function SpAdmin(){

    const [email,setEmail]=useState(localStorage.getItem('email'));
    //alert(email);
    const[confirmPassword,setConfirmPassword]=useState();
    const[newPassword,setNewPassword]=useState();
    const[outPut, setOutput]=useState();
    const navigate=useNavigate();
    const passHandle =(e)=>{
        e.preventDefault();
        if(newPassword===confirmPassword)
        {
            const condition={password:newPassword};
            //alert(apiurluser);
            axios.patch(apiurluser+"update?email="+email,condition).then((response)=>{
                alert("Password updated Successfully!!");
            navigate("/admin");
                //alert(user.role);
        
            }).catch((e)=>{//alert(e.response.data.message)

            })
        }
        else
        {
            alert("New Password and Confirm Password does not match!");
        
        }
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
                            <h1 class="m-0">Please insert new password</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-primary p-5">
                            <form class="col"  onSubmit={passHandle}>
                                <div class="form-group">
                                    <input value={newPassword} type="password" onChange={(e)=>setNewPassword(e.target.value)} class="form-control border-0 p-4" placeholder="New password" required/>
                                </div>
                                <div class="form-group">
                                    <input value={confirmPassword} type="password" onChange={(e)=>setConfirmPassword(e.target.value)} class="form-control border-0 p-4" placeholder="Confirm password" required/>
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

export default SpAdmin;