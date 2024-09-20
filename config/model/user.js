 
const mongoose=require("mongoose");

const Schema=new mongoose.Schema(
{
    email:{
        typeof:String,
        required:true,
        uniuqe:true
    },
    password:{
        typeof:String,
        required:true,
    },
    is_active:{
        typeof:String,
        required:true,
    },
    first_name:String,
    last_name:String,
    phone_number:Number

}    ,{ versionKey:false,
    timestamps:{
     createdAt:"created_at",
     updatedAt:"updated_at"
    }
}
);

class Users extends mongoose.model{

}

Schema.loadClass(Users);
module.exports=mongoose.model("users",Schema);