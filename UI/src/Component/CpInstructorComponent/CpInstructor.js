import './CpInstructor.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiurluser } from '../../ApiUrl';
import axios from 'axios';
import { useState } from 'react';
function CpInstructor(){

    const[email1,setEmail]=useState(localStorage.getItem('email'));
    //console.log(email1);
    //alert(email1);
    const[currentPass,setCurrentPass]=useState();
    const[newPassword,setNewPassword]=useState("");
    const[outPut, setOutput]=useState();
    const navigate=useNavigate();
    const passHandle =(e)=>{
        e.preventDefault();
        axios.get(apiurluser+"fatch?email="+email1).then((res)=>{
            console.log(res.data[0].password);
            setNewPassword(res.data[0].password)
            //alert(newPassword);
            //console.log(newPassword);
            if(currentPass===res.data[0].password)
        {
            navigate("/spinstructor");
                //alert(user.role);
        }
        else
        {
            alert("Wrong Password !");
        
        }
        }).catch((e)=>{alert(e);})    
        
}

    return (
        <>
        {outPut}
        <div className="" style={{margin: "50px 0"}}>
        <div className="" >
            <div className="row align-items-center"  >
                
                <div className="col-lg-5 " >
                    <div className="card border-2">
                        <div className="card-header bg-light text-center p-4">
                            <h1 className="m-0">Please insert your password</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-primary p-5">
                            <form className="col"  onSubmit={passHandle}>
                                <div className="form-group">
                                    <input value={currentPass} type="password" onChange={(e)=>setCurrentPass(e.target.value)} className="form-control border-0 p-4" placeholder="Enter password" required/>
                                </div>
                               {/*  <div className="form-group">
                                    <input value={confirmPassword} type="password" onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control border-0 p-4" placeholder="Enter new password" required/>
                                </div> */}
                                
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

export default CpInstructor;