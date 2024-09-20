 
const mongoose=require("mongoose");

const Schema=new mongoose.Schema(
{
     role_id:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
     }, user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
     }


}    ,{ versionKey:false,
    timestamps:{
     createdAt:"created_at",
     updatedAt:"updated_at"
    }
}
);

class user_roles extends mongoose.model{

}

Schema.loadClass(user_roles);
module.exports=mongoose.model("user_roles",Schema);