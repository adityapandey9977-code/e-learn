import '../models/connection.js'
import contactMode from '../models/contactModel.js'

export const save=async (req,res)=>{
    try{
    const contactFormData=req.body;
    console.log(contactFormData);
    const result=await contactMode.create({...contactFormData});
    console.log(result);
    res.status(200).json({"msg":"contact saved"})
    }
    catch(e){res.status(500).json({"msg":''})}
}