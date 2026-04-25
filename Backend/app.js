import dotenv from "dotenv";
dotenv.config();
/* dotenv.config({ path: "./.env" }); */

/* import dotenv from "dotenv";
import path from "path";
 */
//LOAD ENV

    //dotenv.config()


/* dotenv.config({
  path: path.resolve("./.env")
}); */
import './models/connection.js'
import express from 'express'
import userRo from './router/userRo.js'
import cors from 'cors';
import contactRoute from './router/contactRoute.js';
import courseRoute from './router/courseRoute.js'
import enrollmentRoutes from './router/enrollmentRoute.js'
const app=express();


const allowedOrigins = [
  "https://e-learn-one-ivory.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// VERY IMPORTANT
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use("/uploads",express.static("uploads"));

app.use("/user",userRo);
app.use("/contact",contactRoute);
app.use("/course",courseRoute);
app.use("/enrollment", enrollmentRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});