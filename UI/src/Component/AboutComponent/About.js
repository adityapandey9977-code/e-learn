import './About.css';

function About(){
    return (
        <>
            <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt=""/>
                </div>
                <div className="col-lg-7">
                    <div className="text-left mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>About Us</h5>
                        <h1>Innovative Way To Learn</h1>
                    </div>
                    <p>Welcome to our e-learning platform, where education meets innovation. We are committed to making learning accessible, flexible, and engaging for everyone, regardless of their location or background.

Our platform offers a wide range of courses designed to help students, professionals, and lifelong learners enhance their skills and achieve their goals. Whether you want to improve your technical knowledge, develop soft skills, or explore new interests, we provide high-quality content curated by experienced educators and industry experts.

We believe that learning should not be limited by time or place. That’s why our courses are available anytime, anywhere, allowing you to learn at your own pace and convenience. Our interactive modules, practical assignments, and real-world projects ensure that you gain not just knowledge, but also hands-on experience.


Join us on this journey of continuous learning and growth.</p>
                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div> 

        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Subjects</h5>
                <h1>Explore Top Subjects</h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-1.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Web Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-2.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Development</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-3.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Game Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-4.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Apps Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-5.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Marketing</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-6.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Research</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-7.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Content Writing</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-8.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">SEO</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Teachers</h5>
                <h1>Meet Our Teachers</h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3 text-center team mb-4">
                    <div className="team-item rounded overflow-hidden mb-2">
                        <div className="team-img position-relative">
                            <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="bg-secondary p-4">
                            <h5>Jhon Doe</h5>
                            <p className="m-0">Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-4">
                    <div className="team-item rounded overflow-hidden mb-2">
                        <div className="team-img position-relative">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="bg-secondary p-4">
                            <h5>Jhon Doe</h5>
                            <p className="m-0">Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-4">
                    <div className="team-item rounded overflow-hidden mb-2">
                        <div className="team-img position-relative">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="bg-secondary p-4">
                            <h5>Jhon Doe</h5>
                            <p className="m-0">Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-4">
                    <div className="team-item rounded overflow-hidden mb-2">
                        <div className="team-img position-relative">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="bg-secondary p-4">
                            <h5>Jhon Doe</h5>
                            <p className="m-0">Web Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    );
}

export default About;