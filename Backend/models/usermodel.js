import mo from 'mongoose';

const userSc= new mo.Schema({
    _id:Number,
    name :{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        //required:true,
        trim:true,
        lowercase:true,
        
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    mobile:{
        type:String,
        
        trim:true,
    },
    address:{
        type:String,
        
        trim:true,
        lowercase:true,
    },
    city:{
        type:String,
        
        lowercase:true,
    },
    gender:{
        type:String
        
    },
    role: {
        type: String,
        enum: ["student", "pending_instructor", "instructor", "admin"],
        default: "student"
      },
     verificationToken :{
        type: String
     },
    status:Number,
    profilePic:String,
    info:String
},
 {
    timestamps:true
 }
)

const userCol=mo.model("userdt",userSc);

export default userCol;