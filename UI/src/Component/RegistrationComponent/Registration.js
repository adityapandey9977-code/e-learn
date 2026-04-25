import { useState } from 'react';
import './Registration.css';
import axios from 'axios';
import {apiurluser} from '../../ApiUrl';


function Registration(){
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [pass, setPassword]= useState("");
    const [mobile, SetMobile]= useState("");
    const [address, setAdress]= useState("");
    const [city, setCity]= useState("");
    const [gender, setGender]= useState("");
    const [role, setRole]= useState("");
    const [output, setOutput]= useState("");
    //alert(role);
    
    


    const dataSave=()=>{
          alert(role);
        const userDetail = {name:name,email:email,password:pass,role:role};
        console.log(userDetail);
    axios.post(apiurluser+"save",userDetail).then((response)=>{
            alert("User Registerd succesfully!!!!");
            setName("");
            setEmail("");
            setPassword("");
            SetMobile("");
            setAdress("");
            setCity("");
            setGender("");
            setOutput(response.data.message);
        }).catch((error)=>{
            console.log(error);
            alert(error);
            setOutput("User is not register Successfully !!!!");
        });        
        }

    return (
        <>
    
        <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Need Any Courses</h5>
                        <h1 className="text-white">30% Off For New Students</h1>
                    </div>
                    <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-light text-center p-4">
                            <h1 className="m-0">Sign Up Now</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-primary p-5">
                            <form onSubmit={dataSave}>
                                <div className="form-group">
                                    <input required name='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control border-0 p-4" placeholder="Name"  />
                                </div>
                                {/* <div className="form-group">
                                    <input type="text" value={mobile} onChange={(e)=>SetMobile(e.target.value)}  className="form-control border-0 p-4" placeholder="Mobile number" required="required" />
                                </div> */}
                                <div className="form-group">
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control border-0 p-4" placeholder="Email"  />
                                </div>
                                <div className="form-group">
                                    <input required type="password" value={pass} onChange={(e)=>setPassword(e.target.value)} className="form-control border-0 p-4" placeholder="Password"  />
                                </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationServer04" className="form-label">Role</label>
                                            <select value={role} onChange={(e)=>setRole(e.target.value)}  className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                                                <option  disabled value="">Choose...</option>
                                                <option>Student</option>
                                                <option>Instructor</option>
                                            </select>
                                            <div id="validationServer04Feedback" className="invalid-feedback">
                                                
                                            </div>
                                        </div>
                                {/* <div className="form-group">
                                    <textarea required type="text" value={address} onChange={(e)=>setAdress(e.target.value)} className="form-control border-0 p-4" placeholder="Address" />
                                </div>
                                <div className="form-group">
                                    <input required type="text" value={city} onChange={(e)=>setCity(e.target.value)} className="form-control border-0 p-4" placeholder="City" />
                                </div>
  */}                              {/*  <label className="" for="">
                                                   Gender
                                </label>
                                <div style={{display:"flex"}}>
                                        <div className="form-check">
                                            <input  className="form-check-input" value="male" onChange={(e)=>setGender(e.target.value)}  type="radio" name="radioDefault" id="radioDefault1"/>
                                                <label className="form-check-label" for="radioDefault1">
                                                   Male
                                                </label>
                                        </div>&nbsp;&nbsp;
                                        <div className="form-check">
                                            <input className="form-check-input" value="female" onChange={(e)=>setGender(e.target.value)}  type="radio" name="radioDefault" id="radioDefault1"/>
                                                <label className="form-check-label" for="radioDefault2">
                                                
                                                </label>
                                        </div>
                                </div> */}
                                <br/>
                                {/* <div className="form-group">
                                    <select className="custom-select border-0 px-4" style={{height: "47px"}}>
                                        <option selected>Select a course</option>
                                        <option value="1">Course 1</option>
                                        <option value="2">Course 1</option>
                                        <option value="3">Course 1</option>
                                    </select>
                                </div> */}
                                <div>
                                    <button type="submit" className="btn btn-dark btn-block border-0 py-3" >Sign Up Now</button>
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

export default Registration;