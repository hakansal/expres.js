const express=require("express");
const router=express.Router();


router.get("/get",(req,res)=>{

   res.json({message:"aa"});

})

module.exports=router;