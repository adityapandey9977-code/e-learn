import express from "express";
import { createOrder, verifyPayment, getMyCourses } from "../controller/enrollmentController.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);
router.get("/mycourses", getMyCourses);
export default router;