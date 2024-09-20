const express=require("express");
const router=express.Router();
const Catogories=require("../config/model/categories");
 

router.get("/find",async(req,res)=>{
try {
   
        const categori= await Catogories.find({});
      res.status(200).json({message:categori});
} catch (error) {
   res.status(400).json({ message:error+"  hata"});
}

})

 

module.exports=router;