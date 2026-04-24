import mo from 'mongoose';

const courseSc= new mo.Schema({
    _id:Number,
    title :{
        type:String,
        required:true
        },
    price:{
        type:String
        //required:true, 
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        
        trim:true,
    },
    thumbnail:{
        type:String
    },
    instructorid:{
        type:String
    },
    status: {
        type: String
      },
    info:String
},
 {
    timestamps:true
 }
)

const courseScModel=mo.model("course",courseSc);

export default courseScModel;