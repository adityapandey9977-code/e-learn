import express from 'express';
import * as coursecont from '../controller/courseController.js';
import upload from '../config/mutler.config.js';
const router=express.Router();

router.post("/save",upload.single('thumbnail'),coursecont.save);
router.get("/fatch",coursecont.fatch);
router.delete("/delete",coursecont.del);

router.patch("/update",upload.single("thumbnail"),coursecont.update);
/*router.get("/verify/:token",usercont.verifyEmail);
router.post("/confirmPassword",usercont.confirmPass);
router.patch("/updatePassword",usercont.updatePass);
router.patch("/approveI",usercont.approveInstructor);



router.get("/fatch",usercont.fatch);

 */
export default router;