import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "elearn_uploads", // your folder name
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});
console.log("image saved");
const upload = multer({ storage });

export default upload;