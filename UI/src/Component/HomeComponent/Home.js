import { useEffect } from "react";
import About from '../AboutComponent/About';
import Product from '../ProductComponent/Product';
import './Home.css';

function Home(){

    useEffect(() => {
        window.$('#header-carousel').carousel({
            interval: 2000,
            ride: 'carousel'
        });
    }, []);

    return (
        <>
            <div className="container-fluid p-0 pb-5 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade">

                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">

                        <div className="carousel-item active" style={{minHeight: "300px"}}>
                            <img className="position-relative w-100" src="img/carousel-1.jpg" style={{minHeight: "300px", objectFit: "cover"}} alt=""/>
                            <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width: "100%", maxWidth: "900px"}}>
                            <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 class="display-3 text-white mb-md-4">Best Education From Your Home</h1>
                            <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                        </div>

                        <div className="carousel-item" style={{minHeight: "300px"}}>
                            <img className="position-relative w-100" src="img/carousel-2.jpg" style={{minHeight: "300px", objectFit: "cover"}} alt=""/>
                            <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width: "100%", maxWidth: "900px"}}>
                            <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 class="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
                            <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                        </div>

                        <div className="carousel-item" style={{minHeight: "300px"}}>
                            <img className="position-relative w-100" src="img/carousel-3.jpg" style={{minHeight: "300px", objectFit: "cover"}} alt=""/>
                            <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width : "100%", maxWidth: "900px"}}>
                            <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 class="display-3 text-white mb-md-4">New Way To Learn From Home</h1>
                            <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                        </div>

                    </div>

                </div>
            </div>

            <About/>
            <Product/>
        </>
    );
}

export default Home;

/* import About from '../AboutComponent/About';
import Product from '../ProductComponent/Product';
import './Home.css';

function Home(){
    return (
        <>
            <div class="container-fluid p-0 pb-5 mb-5">
        <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="2000">
            <ol class="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active" style={{minHeight: "300px"}}>
                    <img class="position-relative w-100" src="img/carousel-1.jpg" style={{minHeight: "300px", objectFit: "cover"}}/>
                    <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width: "100%", maxWidth: "900px"}}>
                            <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 class="display-3 text-white mb-md-4">Best Education From Your Home</h1>
                            <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" style={{minHeight: "300px"}}>
                    <img class="position-relative w-100" src="img/carousel-2.jpg" style={{minHeight: "300px", objectFit: "cover"}}/>
                    <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width: "100%", maxWidth: "900px"}}>
                            <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 class="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
                            <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" style={{minHeight: "300px"}}>
                    <img class="position-relative w-100" src="img/carousel-3.jpg" style={{minHeight: "300px", objectFit: "cover"}}/>
                    <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width : "100%", maxWidth: "900px"}}>
                            <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 class="display-3 text-white mb-md-4">New Way To Learn From Home</h1>
                            <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

       <About/>
        <Product/>


        </>
    );
}

export default Home; */