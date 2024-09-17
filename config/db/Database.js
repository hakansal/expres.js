
const mongoose=require("mongoose");

const Connect=async()=>{

  try {
      await mongoose.connect(process.env.DB_CONNECT_URL);
      console.log("bağlandı")
  } catch (error) {
    console.log(error)
    
  }
    
}
module.exports=Connect;