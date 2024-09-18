 
const mongoose=require("mongoose");

const Schema=new mongoose.Schema(
{
    is_active:Boolean,
    created_by:{
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

class categories extends mongoose.model{

}

User.loadClass(categories);
module.exports=mongoose.model("categories",Schema);