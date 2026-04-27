import { useEffect, useState } from 'react';
import './EpInstructor.css';
import axios from 'axios';
import {apiurluser} from '../../ApiUrl';
import { FaEdit } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function EpInstructor(){
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [pass, setPassword]= useState("");
    const [mobile, SetMobile]= useState("");
    const [address, setAdress]= useState("");
    const [city, setCity]= useState("");
    const [gender, setGender]= useState("");
    const [role, setRole]= useState("");
    const [output, setOutput]= useState("");
    const [val, setDisable]=useState(true);
    //alert(role);
    const allowEdit=()=>{setDisable(!val)}
    const [preview, setPreview]= useState("https://dummyimage.com/120x120/cccccc/000000&text=User");
    const[image, setImage]=useState(null);
    const[profilePic, setImageName]=useState("");

    useEffect(()=>{
        
        axios.get(apiurluser+"fatch?email="+localStorage.getItem('email')+"&role="+localStorage.getItem('role')).then((res)=>{
            console.log(res.data);
            setName(res.data[0].name);
            setEmail(res.data[0].email);
            //setPassword(res.data[0]);
            SetMobile(res.data[0].mobile);
            setAdress(res.data[0].address);
            setCity(res.data[0].city);
            setGender(res.data[0].gender);
            if(res.data[0].profilePic)
            {setPreview(`${process.env.REACT_APP_API_URL}/uploads/`+res.data[0].profilePic)}
        }).catch()
    },[])    
    
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file.name);
    setImageName(file.name);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

    const dataSave=(e)=>{
          //alert(role);
          e.preventDefault();
        //const userDetail = {name:name,mobile:mobile,address:address,gender:gender,city:city,profilePic:profilePic};
        const formdata=new FormData();
        formdata.append("name",name);
        formdata.append("mobile",mobile);
        formdata.append("city",city);
        formdata.append("address",address);
        formdata.append("gender",gender);
        if(image){formdata.append("profilePic",image);}
        

    axios.patch(apiurluser+"update?email="+email,formdata).then((response)=>{
            alert("Profile updated succesfully!");
            
        }).catch((error)=>{
            console.log(error);
            alert(error);
            setOutput("User is not register Successfully !");
        });        
        }

    return (
        <>
    
        <div className="" style={{margin: "20px 0"}}>
        <div className="">
            <div className="row align-items-center">
                {/* <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}></h5>
                        <h1 className="text-white"></h1>
                    </div>
                    <p className="text-white"></p>
                    {/* <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul> 
                </div>*/}
                <div className="col-lg-12">
                    <div className="card border-2">
                        <div className="text-center">
                            <h1 className="m-0">Edit Profile</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-fo p-5">
                            <form onSubmit={dataSave}>
                                        <div className="profile-image-box text-center">
                                            <div ><img src={preview} className="profile-img imag" alt="profile" />
 </div>
                                            <label htmlFor="fileInput" className="edit-img-icon" title="Edit profile picture">
                                                
                                                <i className="fas fa-pencil-alt fa-1x mr-1 text-white"></i>
                                            </label>
                                           

                                            <input
                                                type="file"
                                                id="fileInput"
                                                hidden
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                <div style={{textAlign:"right"}}  ><button title="Edit" type="button" onClick={allowEdit} className='btn'><FaEdit color="white" size="3em" /></button></div>
      
      

                                <fieldset disabled={val}>
                                    
                                <div className="form-group">
                                    <input required name='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control border-0 p-4" placeholder="Name"  />
                                </div>
                                 <div className="form-group">
                                    <input type="text" value={mobile} onChange={(e)=>SetMobile(e.target.value)}  className="form-control border-0 p-4" placeholder="Mobile number" required="required" />
                                </div>
                                <div className="form-group">
                                    <input disabled type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control border-0 p-4" placeholder="Email"  />
                                </div>
                                {/*<div className="form-group">
                                    <input required type="password" value={pass} onChange={(e)=>setPassword(e.target.value)} className="form-control border-0 p-4" placeholder="Password"  />
                                </div>
                                         <div className="col-md-3">
                                            <label for="validationServer04" className="form-label">Role</label>
                                            <select value={role} onChange={(e)=>setRole(e.target.value)}  className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                                                <option selected disabled value="">Choose...</option>
                                                <option>Student</option>
                                                <option>Instructor</option>
                                            </select>
                                            <div id="validationServer04Feedback" className="invalid-feedback">
                                                
                                            </div>
                                        </div> */}
                                 <div className="form-group">
                                    <textarea required type="text" value={address} onChange={(e)=>setAdress(e.target.value)} className="form-control border-0 p-4" placeholder="Address" />
                                </div>
                                {/* <div className="form-group">
                                    <input required type="text" value={city} onChange={(e)=>setCity(e.target.value)} className="form-control border-0 p-4" placeholder="City" />
                                </div> */}
                                  <label className="" for="" style={{color:"white"}} >
                                                   Gender
                                </label>
                                <div style={{display:"flex"}}>
                                        <div className="form-check">
                                            <input  className="form-check-input" value="male" checked={gender==='male'} onChange={(e)=>setGender(e.target.value)}  type="radio" name="radioDefault" id="radioDefault1"/>
                                                <label style={{color:"white"}} className="form-check-label " for="radioDefault1">
                                                   Male
                                                </label>
                                        </div>&nbsp;&nbsp;
                                        <div className="form-check">
                                            <input className="form-check-input" value="female" checked={gender==='female'} onChange={(e)=>setGender(e.target.value)}  type="radio" name="radioDefault" id="radioDefault1"/>
                                                <label style={{color:"white"}} className="form-check-label label-t" for="radioDefault2">
                                                Female
                                                </label>
                                        </div>
                                </div> 
                                <br/>
                                 <div className="form-group">
                                    <label for="validationServer04" style={{color:"white"}} className="form-label">City</label>
                                    <select value={city} onChange={(e)=>setCity(e.target.value)} className="custom-select border-0 px-4" style={{height: "47px"}}>
                                        <option  >Select...</option>
                                        <option value="indore">Indore</option>
                                        <option value="bhopal">Bhopal</option>
                                        <option value="3">Course 1</option>
                                    </select>
                                </div> 
                                <div>
                                    <button type="submit" className="btn btn-dark btn-block border-0 py-3" >Update Profile</button>
                                </div>
                                </fieldset>
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

export default EpInstructor;