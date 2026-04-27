import { useContext, useEffect, useRef, useState } from 'react';
import './UpdateCourse.css';
import axios from 'axios';
import {apiurlcourse} from '../../ApiUrl';
import { FaEdit } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import {Navigate, useNavigate} from 'react-router-dom'

import {useLocation} from 'react-router-dom'
function UpdateCourse(){

    
    const location=useLocation();
    //alert(location.state.aid);
    const [cid,setCid]=useState(location.state.aid);

        const [preview, setPreview]= useState("https://dummyimage.com/120x120/cccccc/000000&text=User");
        const[image, setImage]=useState(null);
        const[profilePic, setImageName]=useState("");
    
    const formRif=useRef();
    const navigate=useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [duration, setDuration] = useState("");
    const [msg, setMsg] = useState("");

    const instructorid = localStorage.getItem('_id');
   
    const handleImage =(e)=>{
        const file = e.target.files[0];
        setFile(file);
        setImage(file);
    console.log(file.name);
    setImageName(file.name);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
    }
    useEffect(()=>{
        axios.get(apiurlcourse+"fatch?_id="+cid).then((res)=>{
            setTitle(res.data[0].title);
            setPrice(res.data[0].price);
            setDuration(res.data[0].duration);
            setDescription(res.data[0].description);
                        if(res.data[0].thumbnail)
            {setPreview(`${process.env.REACT_APP_API_URL}/uploads/`+res.data[0].thumbnail)}
            //alert();
        }).catch()

    },[])

/*     const HandleSubmit = async (e) => {
         e.preventDefault();
        const formData = new FormData();
        formData.append("tile", title);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("duration", duration);
        formData.append("instructorid", instructorid);  
        //formData.append("thumbnail", file);
        alert(formData);
        console.log(formData);
        try {
          await axios.post(
            apiurlcourse + "save",formData
          );
      
          alert("Course Added successfully");
      
        } catch (err) {
          console.log(err);
          alert("Course Not Added successfully");
        }
      };
 */    
        const HandleSubmit = async (e) => {
            e.preventDefault();
                    //alert("hi");

        const formData = new FormData();
        formData.append("title", title);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("duration", duration);
        formData.append("instructorid", instructorid);  
        formData.append("thumbnail", file);
            /*  for (let pair of formData.entries()) {
    console.log(pair[0], pair[1]);
  } */
        try {
          await axios.patch(
            apiurlcourse + "update?_id="+cid,formData
          );
      console.log(window.location.pathname);
          alert("Course updated successfully !");
          
          
          formRif.current.reset();
          e.preventDefault();
          console.log(window.location.pathname);
        } catch (err) {
          console.log(err);
          setMsg("Course Not Added successfully");
          setFile("");
          setTitle("");
          setPrice("");
          setDescription("");
          setDuration("");
        }
      };


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
                            <h1 className="m-0">Update Cource</h1>
                        </div>
                        
                        <div className="card-body rounded-bottom bg-fo p-5">
                            <form ref={formRif} onSubmit={HandleSubmit}>
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
                                                onChange={handleImage}
                                            />
                                        </div>
      

                                    
                                <div className="form-group">
                                    <input required value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control border-0 p-4" placeholder="Titel"  />
                                </div>
                                 <div className="form-group">
                                    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}  className="form-control border-0 p-4" placeholder="Price" required="required" />
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
                                    <input required type="text" value={duration} onChange={(e)=>setDuration(e.target.value)} className="form-control border-0 p-4" placeholder="Duration" />
                                </div>       
                                 <div className="form-group">
                                    <textarea required type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control border-0 p-4" placeholder="Description" />
                                </div>
                                
                                <br/>
                                 {/* <div className="form-group">
                                    <input required type="file" onChange={handleImage}   />
                                </div> */}
                                <div>
                                    <button type="submit" className="btn btn-dark btn-block border-0 py-3" >Update Course</button>
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

export default UpdateCourse;