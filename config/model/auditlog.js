 
const mongoose=require("mongoose");

const Schema=new mongoose.Schema(
{
    level:String,
    email:String,
    location:String,
    proc_type:String,
    log:String


}    ,{ versionKey:false,
    timestamps:{
     createdAt:"created_at",
     updatedAt:"updated_at"
    }
}
);

class Audistlog extends mongoose.model{

}

Schema.loadClass(Audistlog);
module.exports=mongoose.model("Audistlog",Schema);