import { Link, useNavigate } from 'react-router-dom';
import './Product.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurlcourse } from '../../ApiUrl';

function Product(){
    const navigate=useNavigate();
    const [courses,setcourses]=useState([]);
    useEffect(()=>{
        axios.get(apiurlcourse+"fatch?status=1").then((res)=>{
            setcourses(res.data);
            console.log(res.data);
        }).catch((e)=>{console.log(e);})


    },[]);

      const handleEnroll = (courseId) => {
        //alert(courseId);
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", {
        state: { from: `/coursedetails/${courseId}` }
      });
    } else {
        console.log("Navigating to:", `/coursedetails/${courseId}`);
      navigate(`/coursedetails/${courseId}`);
    }
  };
    return (
        <>
        
        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Courses</h5>
                <h1>Our Popular Courses</h1>
            </div>
             <div className="row">
{/*                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-1.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <Link className="h5">Web design & development courses for beginner</Link>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-2.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-3.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-4.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-5.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-6.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {courses.map((row)=>(

                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" style={{width:"100%", height:"200px", objectFit:"cover"}} src={`${row.thumbnail}`}  alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>{row.duration}</small>
                            </div>
                            <a
  className="h5"
  style={{ cursor: "pointer" }}
  onClick={() => handleEnroll(row._id)}
>
  {row.title}
</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">₹ &nbsp;{row.price}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                ))
                  
                }
            </div>
        </div>
    </div>

        </>
    );
}

export default Product;