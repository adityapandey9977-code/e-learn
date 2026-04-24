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
    
        <div class="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-7 mb-5 mb-lg-0">
                    <div class="mb-4">
                        <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Need Any Courses</h5>
                        <h1 class="text-white">30% Off For New Students</h1>
                    </div>
                    <p class="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul class="list-inline text-white m-0">
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <div class="card border-0">
                        <div class="card-header bg-light text-center p-4">
                            <h1 class="m-0">Sign Up Now</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-primary p-5">
                            <form onSubmit={dataSave}>
                                <div class="form-group">
                                    <input required name='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control border-0 p-4" placeholder="Name"  />
                                </div>
                                {/* <div class="form-group">
                                    <input type="text" value={mobile} onChange={(e)=>SetMobile(e.target.value)}  class="form-control border-0 p-4" placeholder="Mobile number" required="required" />
                                </div> */}
                                <div class="form-group">
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  class="form-control border-0 p-4" placeholder="Email"  />
                                </div>
                                <div class="form-group">
                                    <input required type="password" value={pass} onChange={(e)=>setPassword(e.target.value)} class="form-control border-0 p-4" placeholder="Password"  />
                                </div>
                                        <div class="col-md-3">
                                            <label for="validationServer04" class="form-label">Role</label>
                                            <select value={role} onChange={(e)=>setRole(e.target.value)}  class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                                                <option  disabled value="">Choose...</option>
                                                <option>Student</option>
                                                <option>Instructor</option>
                                            </select>
                                            <div id="validationServer04Feedback" class="invalid-feedback">
                                                
                                            </div>
                                        </div>
                                {/* <div class="form-group">
                                    <textarea required type="text" value={address} onChange={(e)=>setAdress(e.target.value)} class="form-control border-0 p-4" placeholder="Address" />
                                </div>
                                <div class="form-group">
                                    <input required type="text" value={city} onChange={(e)=>setCity(e.target.value)} class="form-control border-0 p-4" placeholder="City" />
                                </div>
  */}                              {/*  <label class="" for="">
                                                   Gender
                                </label>
                                <div style={{display:"flex"}}>
                                        <div class="form-check">
                                            <input  class="form-check-input" value="male" onChange={(e)=>setGender(e.target.value)}  type="radio" name="radioDefault" id="radioDefault1"/>
                                                <label class="form-check-label" for="radioDefault1">
                                                   Male
                                                </label>
                                        </div>&nbsp;&nbsp;
                                        <div class="form-check">
                                            <input class="form-check-input" value="female" onChange={(e)=>setGender(e.target.value)}  type="radio" name="radioDefault" id="radioDefault1"/>
                                                <label class="form-check-label" for="radioDefault2">
                                                
                                                </label>
                                        </div>
                                </div> */}
                                <br/>
                                {/* <div class="form-group">
                                    <select class="custom-select border-0 px-4" style={{height: "47px"}}>
                                        <option selected>Select a course</option>
                                        <option value="1">Course 1</option>
                                        <option value="2">Course 1</option>
                                        <option value="3">Course 1</option>
                                    </select>
                                </div> */}
                                <div>
                                    <button type="submit" class="btn btn-dark btn-block border-0 py-3" >Sign Up Now</button>
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