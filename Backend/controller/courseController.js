import '../models/connection.js'
import courseScModel from '../models/courseModel.js'

export const save= async(req,res)=>{
    try{
        const coursedetails=req.body;
        //console.log(coursedetails);
        
        let coursedata=await courseScModel.find();
            let len=coursedata.length;
            let _id=(len==0)?1:coursedata[len-1]._id+1;
            console.log(coursedetails);
            let courseDetail ={...req.body,"_id":_id,"status":0,"info":Date()};
                
            
            if(req.file)
        {
            courseDetail.thumbnail=req.file.path;
        }  
            console.log(courseDetail);
                //let userid=if()userdata[userdata.length-1]._id+1;
                //console.log(_id);
                await courseScModel.create(courseDetail);
                res.status(200).json({"course":"saved"});
          

    }catch(e){console.log(e)}
}

export const fatch=async(req,res)=>{
    try{
        let condition = req.query;
        console.log(condition);
        let coursedata=await courseScModel.find(condition);
        console.log(coursedata);
        
        res.status(200).json(coursedata);
        
    }
    catch(err){
        console.log(err);
    }


}

export const update=async(req,res)=>{

    try{
    let condition=req.query;
    let newdata=req.body;
    if(req.file)
    {
      newdata.thumbnail=req.file.path;
    }
    console.log(condition);
    console.log(newdata);
   // let updatereturn=await userCollection.updateOne({email:em},{$set:newdata});
    let updatereturn=await courseScModel.updateMany(condition,{$set:newdata});
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

export const del=async(req,res)=>{
    let deldata=req.query;
    let delreturn=await courseScModel.deleteMany(deldata);
    console.log(delreturn);
    res.status(200).json({"msg":"data deleted"});
}
