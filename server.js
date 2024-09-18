const express=require("express");
require("dotenv").config();
const Connect=require("./config/db/Database");
const router=require("./routes/deneme");
Connect();
const app=express();
app.use(express.json());

 app.use("/routes",router);
 
 
app.listen(3000,()=>{
    console.log("server başladı");
})