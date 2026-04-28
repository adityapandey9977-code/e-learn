import { useNavigate, useParams } from 'react-router-dom';
import './CourseDetails.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

function CourseDetails(){
  
    const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // ADD

  const SERVER_URL = `${process.env.REACT_APP_API_URL}/uploads/`;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/course/fatch`)
      .then((res) => {
        const found = res.data.find(c => c._id == id);
        setCourse(found);
      });
  }, [id]);

  if (!course) return <h3>Loading...</h3>;

  const handleEnroll = async () => {

    if (isProcessing) return; //  prevent double click
    setIsProcessing(true);

    const userId = localStorage.getItem("_id");

    const { data: order } = await axios.post(
      `${process.env.REACT_APP_API_URL}/enrollment/create-order`,
      { amount: course.price }
    );
    console.log(order);
    const options = {
      key: "rzp_test_SdMGcBRwePGdiv",
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "E-Learning",
      description: course.title,

      //  SUCCESS
      handler: async function (response) {
        console.log("success");
        await axios.post(
          `${process.env.REACT_APP_API_URL}/enrollment/verify-payment`,
          {
            ...response,
            userId,
            courseId: course._id,
            amount: course.price
          }
        );

        alert("Payment Successful ");
        navigate("/studentmycourse");
      },

      //  CANCEL
      modal: {
        ondismiss: async function () {
          console.log("on");
          try {
            await axios.post(
              `${process.env.REACT_APP_API_URL}/enrollment/verify-payment`,
              {
                razorpay_payment_id: "demo_payment",
                razorpay_order_id: order.id,
                razorpay_signature: "demo_signature",
                userId,
                courseId: course._id,
                amount: course.price
              }
            );
          } catch {}

          alert("Payment Successful (Demo)");

          //  CLOSE POPUP
          const popup = document.querySelector(".razorpay-container");
          if (popup) popup.style.display = "none";

          navigate("/studentmycourse");
        }
      }
    };

    const rzp = new window.Razorpay(options);

    //  FAIL CASE
    rzp.on("payment.failed", async function () {

      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/enrollment/verify-payment`,
          {
            razorpay_payment_id: "demo_payment",
            razorpay_order_id: order.id,
            razorpay_signature: "demo_signature",
            userId,
            courseId: course._id,
            amount: course.price
          }
        );
      } catch {}

      alert("Payment Successful (Demo)");

      //CLOSE POPUP
      const popup = document.querySelector(".razorpay-container");
      if (popup) popup.style.display = "none";

      navigate("/studentmycourse");
    });

    rzp.open();
  };


    return(
        <>
            
{/* <section className="hero">
  <div className="container hero-content">
    <div className="hero-left">
      <h1>The Complete Web Development Bootcamp</h1>
      <p>Learn Web Development from scratch and build real-world projects</p>

      <div className="meta">
        ⭐ 4.7 &nbsp; | &nbsp; 150,000 students &nbsp; | &nbsp; Created by John Doe
      </div>
    </div>

    <div className="hero-right">
      <img src="https://via.placeholder.com/350x200" />
    </div>
  </div>
</section>

<div className="container main">

  
  <div className="left">

    <div className="card learn">
      <h2>What you'll learn</h2>
      <div className="grid">
        <p>✔ Build full stack apps</p>
        <p>✔ Master React & Node</p>
        <p>✔ Work with MongoDB</p>
        <p>✔ Deploy apps</p>
      </div>
    </div>

    <div className="card">
      <h2>Course Content</h2>

      <div className="accordion">
        <div className="item">
          <div className="title">Introduction</div>
          <div className="content">Course overview</div>
        </div>

        <div className="item">
          <div className="title">HTML & CSS</div>
          <div className="content">Basics to advanced</div>
        </div>

        <div className="item">
          <div className="title">JavaScript</div>
          <div className="content">Core concepts</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Description</h2>
      <p>
        This course will take you from beginner to professional developer.
        Learn modern technologies like React, Node.js, MongoDB.
      </p>
    </div>

  </div>

  <div className="right">

    <div className="course-card">
      <img src="https://via.placeholder.com/300x180" />

      <h2>₹1999</h2>

      <button className="btn-primary1">Enroll Now</button>

      <p className="small">30-Day Money-Back Guarantee</p>

      <div className="includes">
        <p>✔ 60 hours video</p>
        <p>✔ Lifetime access</p>
        <p>✔ Certificate</p>
      </div>
    </div>

  </div>

</div> */}

      <div className="container mt-5">

      <div className="row">

        {/* LEFT SIDE IMAGE */}
        <div className="col-md-6">
          <img
            src={`${course.thumbnail}`}
            alt="course"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="col-md-6">

          <h2>{course.title}</h2>

          <p className="text-muted">{course.description}</p>

          <h4>Price: ₹{course.price}</h4>
          <h5>Duration: {course.duration}</h5>

          <Button
            variant="success"
            onClick={handleEnroll}
            className="mt-3 w-100 mb-5"
          >
            Enroll Now
          </Button>

        </div>

      </div>

    </div>

        </>
    )
}

export default CourseDetails;