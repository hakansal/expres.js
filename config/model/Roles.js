 
const mongoose=require("mongoose");

const Role=new mongoose.Schema(
{
    role_name:{
        typeof:String,
        required:true,
    },
    is_active:{
        typeof:String,
        required:true,
    },
    created_by:{
        typeof:mongoose.SchemaTypes.ObjectId,
        required:true,
    },
     
}    ,{
    versionKey:false,
    timestamps:{
     createdAt:"created_at",
     updatedAt:"updated_at"
    }
}
);

class Roles extends mongoose.model{

}

User.loadClass(Roles);
module.exports=mongoose.model("roles",Role);