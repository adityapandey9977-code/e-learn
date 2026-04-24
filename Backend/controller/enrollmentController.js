import razorpay from "../config/razorpay.js";
import crypto from "crypto";
import EnrollmentModel from "../models/enrollmentModel.js";

//  CREATE ORDER
export const createOrder = async (req, res) => {
  console.log("Create Order Called");
  try {
    const { amount } = req.body;
    console.log(amount);
    const options = {
      amount: amount * 100, // paisa
      currency: "INR",
      receipt: "receipt_" + Date.now()
    };
console.log("KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);
    const order = await razorpay.orders.create(options);
    console.log(order);
    res.json(order);

  } catch (err) {console.log(err);
    res.status(500).json({ message: "Error creating order" });
  }
};

//  VERIFY PAYMENT + SAVE ENROLLMENT
export const verifyPayment = async (req, res) => {
  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
      courseId,
      amount
    } = req.body;

    // DEMO MODE (MOST IMPORTANT)
    if (
      razorpay_payment_id === "demo_payment" ||
      razorpay_signature === "demo_signature"
    ) {
      const existing = await EnrollmentModel.findOne({
        userId,
        courseId
      });
    
      if (existing) {
        return res.json({ message: "Already Enrolled" });
      }
      await EnrollmentModel.create({
        userId,
        courseId,
        amount,
        paymentId: "demo_payment",
        orderId: razorpay_order_id || "demo_order",
        paymentStatus: "success"
      });

      return res.json({ message: "Demo Enrollment Success" });
    }

    //  REAL VERIFY
    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (expectedSign === razorpay_signature) {

      await EnrollmentModel.create({
        userId,
        courseId,
        amount,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        paymentStatus: "success"
      });

      return res.json({ message: "Payment Verified" });
    }

    res.status(400).json({ message: "Invalid Signature" });

  } catch (err) {
    res.status(500).json({ message: "Error verifying payment" });
  }
};

// GET MY ENROLLED COURSES
import CourseModel from "../models/courseModel.js";

export const getMyCourses = async (req, res) => {
  try {
    const { userId } = req.query;

    const enrollments = await EnrollmentModel.find({ userId });

    //  manual join
    const courses = await Promise.all(
      enrollments.map(async (item) => {
        const course = await CourseModel.findOne({ _id: item.courseId });

        return {
          ...item._doc,
          courseId: course
        };
      })
    );

    res.json(courses);

  } catch (err) {
    res.status(500).json({ message: "Error fetching courses" });
  }
};