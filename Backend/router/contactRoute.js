import express from 'express'
import * as contactCo from '../controller/contactController.js'

const contactRoute=express.Router();

contactRoute.post("/save",contactCo.save);

export default contactRoute;