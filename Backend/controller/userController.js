import '../models/connection.js'
import userCollection from '../models/usermodel.js'
import jwt from 'jsonwebtoken'
import rs from 'randomstring'
import crypto from 'crypto';
import sendMail from './emailController.js';
import forgotEmail from './forgotEmail.js';

export const save=async (req,res)=>{
   try{ 
    console.log("saved");
    let userdetails=req.body;
    let userdata=await userCollection.find();
    let len=userdata.length;
    let _id=(len==0)?1:userdata[len-1]._id+1;
    console.log(userdetails);

    let role = "student";

   if (req.body.role === "Instructor") {
    role = "pending_instructor";
  }
    //genrate verfication token
    const token = crypto.randomBytes(32).toString("hex");      

    
  let userDetail ={...req.body,"_id":_id,"status":0,"role":role,"info":Date(),verificationToken:token};
    console.log(userDetail);



    //let userid=if()userdata[userdata.length-1]._id+1;
    //console.log(_id);
    let savedData=await userCollection.create(userDetail);
    
    console.log(process.env.REACT_APP_API_URL);
    const verifyLink = `${process.env.REACT_APP_API_URL}/user/verify/${token}`;
    sendMail(savedData.email,verifyLink);
    
    res.status(200).json({"msg":"data saved"});
    }
    catch(e){console.log(e); res.status(500).json({"msg":e});}
}
//--------------------------Verify Email Api ---------------------
export const verifyEmail = async(req,res)=>{
  console.log("Verify api called"); 
  try{
       const user = await userCollection.findOne({verificationToken : req.params.token});

       if(!user)
       {
           return res.status(404).json({msg:"user not found"});
       } 
      user.status=1;
      user.verificationToken ="" ;
      await user.save();
      res.redirect(`${process.env.FRONTEND_URL}/login`);
      
  }
  catch(err)
  {
    console.log(err);
     res.status(500).json({msg:"Server Error"});
  }
}
////////

export const login=async(req,res)=>{
    try{
    let {email,password}= {...req.body};
    //console.log(req.body);
    let condition = {...req.body};
    console.log(email);
    let user= await userCollection.findOne({email});
        console.log(user);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // 2. password check
    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    // Pending instructor block
      if (user.role === "pending_instructor") {
          return res.status(403).json({
          message: "Your instructor request is pending approval"
      });
  }
    //  status check (MOST IMPORTANT)
    if (user.status === 0) {
      return res.status(403).json({
        message: "Your account is not active"
      });
    }

    // 4. token generate
    const payload = {
      email: user.email,
      role: user.role
    };

    //const key = rs.generate();
    const key = "secretkey";
    const token = jwt.sign(payload, key);

    // 5. success response
    res.status(200).json({
      token,
      user
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong"
    });
  }

}

///////
export const update=async (req,res)=>{
    try{
    let condition=req.query;
    let newdata=req.body;
    if(req.file)
    {
      //newdata.profilePic=req.file.filename;
      newdata.profilePic=req.file.path;
    }
    console.log(req.file.path);
    console.log(newdata);
   // let updatereturn=await userCollection.updateOne({email:em},{$set:newdata});
    let updatereturn=await userCollection.updateMany(condition,{$set:newdata});
    console.log(updatereturn);
    if(updatereturn.modifiedCount>0)
    {
   //console.log(updatereturn.modifiedCount);
    res.status(200).json({"msg":"data updated"});
    }
    else
    {
    res.status(500).json({"msg":"Err in data updated"});
    }
    }
    catch(err){console.log(err)}
}

////////
export const fatch=async(req,res)=>{
    try{
        let condition = req.query;
        console.log(condition);
        let userdata=await userCollection.find(condition);
        console.log(userdata);
        
        res.status(200).json(userdata);
        
    }
    catch(err){
        console.log(err);
    }

}
///////
export const del=async(req,res)=>{
    let deldata=req.query;
    let delreturn=await userCollection.deleteMany(deldata);
    console.log(delreturn);
    res.status(200).json({"msg":"data deleted"});
}

//Confirmpassword

export const confirmPass=async(req,res)=>{
 try{ let conemail=req.body;
  console.log(conemail);
  let condata=await userCollection.findOne(conemail);
  if(!condata)
  {res.status(404).json({"message":"Please insert valid email"})}
  else
  {
    console.log(condata);
    //const contoken = crypto.randomBytes(32).toString("hex");
    //res.redirect(`${process.env.FRONTEND_URL}/login`);      
    const converifyLink = `${process.env.FRONTEND_URL}/resetPassword/${condata.email}`;
    //let updatereturn=await userCollection.updateOne({email:condata.email},{$set:{verificationToken:contoken}});
    forgotEmail(condata.email,converifyLink);
    res.status(200).json({"message":"Reset password link has been sent to your email, Please check your email"})
    
  }
}
catch(e){res.status(450).json({"message":e})}
}

//updatePass

export const updatePass =async(req,res)=>{
try{
  console.log("update Password");
let newEmail=req.body.email;
let newPass=req.body.password;
let updateRes=await userCollection.updateOne({email:newEmail},{$set:{password:newPass}});
console.log(updateRes);
      res.status(200).json({"message":"Password changed successfully!!"});
}
catch(e){console.log(e)}
}

//--------------------------Apprval Instructor-------------------
export const approveInstructor = async (req, res) => {
  try {
    const userId = req.query.id;
    console.log(userId);
    // 1. check user exist
    const user = await userCollection.findOne({ _id: userId });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. validation
    if (user.role === "instructor") {
      return res.status(400).json({ message: "Already instructor" });
    }

    if (user.role !== "pending_instructor") {
      return res.status(400).json({ message: "Not eligible for approval" });
    }

    // 3. direct update
    await userCollection.updateOne(
      { _id: userId },
      { 
        role: "instructor",
        status: 1   // login allow
      }
    );

    res.status(200).json({
      message: "Instructor approved successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error approving instructor" });
  }
};
