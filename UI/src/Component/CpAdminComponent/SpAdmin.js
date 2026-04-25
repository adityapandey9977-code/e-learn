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
        <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div className="container py-5" >
            <div className="row align-items-center" style={{justifyContent:"end",display:"flex"}} >
                
                <div className="col-lg-5 " >
                    <div className="card border-0">
                        <div className="card-header bg-light text-center p-4">
                            <h1 className="m-0">Please insert new password</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-primary p-5">
                            <form className="col"  onSubmit={passHandle}>
                                <div className="form-group">
                                    <input value={newPassword} type="password" onChange={(e)=>setNewPassword(e.target.value)} className="form-control border-0 p-4" placeholder="New password" required/>
                                </div>
                                <div className="form-group">
                                    <input value={confirmPassword} type="password" onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control border-0 p-4" placeholder="Confirm password" required/>
                                </div>
                                
                                <div>
                                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Submit</button>
                                
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