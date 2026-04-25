import './StudentDashboard.css';

function StudentDashboard(){
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
                        <h1>Student Dashboard</h1>
                    </div>
                    <p>Welcome to Student Dashboard</p>
                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div> 


    
        </>
    );
}

export default StudentDashboard;