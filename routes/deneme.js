const router=require("express").Router();


router.post("/deneme",(req,res,next)=>{
   const{body}=req.body;
    res.json({
        body:body,
        body:req.body,
        params:req.params,
        query:req.query,
        headers:req.headers
    });
});

router.get("/deneme2",(req,res,next)=>{
    const{body}=req.body;
     res.json({
         body:body,
         body:req.body,
         params:req.params,
         query:req.query,
         headers:req.headers
     });
 });

module.exports=router;