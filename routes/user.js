const express=require("express");
const router=express.Router();
import  User from "../config/model/user"

router.get("/1",(req,res)=>{

   res.json({message:"aa"});

})
router.post("/create" ,async(req,res)=>{
    const{email ,password,is_active}=req.body;
})


module.exports=router;