const express=require("express");
require("dotenv").config();
const Connect=require("./config/db/Database");

Connect();
const app=express();

app.get("/",(req,res)=>{
    res.json({mesage:"merhaba"});
})
 
app.listen(3000,()=>{
    console.log("server başladı");
})