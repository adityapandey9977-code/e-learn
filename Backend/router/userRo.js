import express from 'express';
import * as usercont from '../controller/userController.js';
//import upload from '../config/mutler.config.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/upload.js'

const router=express.Router();

router.post("/save",usercont.save);
router.post("/login",usercont.login);
router.patch("/update",auth, upload.single("profilePic"),usercont.update);
router.get("/verify/:token",usercont.verifyEmail);
router.post("/confirmPassword",usercont.confirmPass);
router.patch("/updatePassword",usercont.updatePass);
router.patch("/approveI",usercont.approveInstructor);
router.get("/fatch",usercont.fatch);
router.delete("/delete",usercont.del);
export default router;