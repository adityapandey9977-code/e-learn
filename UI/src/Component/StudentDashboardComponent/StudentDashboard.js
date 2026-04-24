import './StudentDashboard.css';

function StudentDashboard(){
    return (
        <>
            <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img class="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt=""/>
                </div>
                <div class="col-lg-7">
                    <div class="text-left mb-4">
                        <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>About Us</h5>
                        <h1>Student Dashboard</h1>
                    </div>
                    <p>Welcome to Student Dashboard</p>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div> 


    
        </>
    );
}

export default StudentDashboard;