 
const mongoose=require("mongoose");

const Schema=new mongoose.Schema(
{
    role_id:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },permisson:{
        type:String,
        required:true
    },
    created_by:{
        typeof:mongoose.SchemaTypes.ObjectId,
        required:true,
    },

}    ,{ versionKey:false,
    timestamps:{
     createdAt:"created_at",
     updatedAt:"updated_at"
    }
}
);

class rolepage extends mongoose.model{

}

User.loadClass(rolepage);
module.exports=mongoose.model("rolepage",Schema);