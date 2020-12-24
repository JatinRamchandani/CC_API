const e = require('express');
const express= require('express');
const path=require("path");
const fs=require('fs');
const router=express.Router();
const topic=require('../models/topics');



router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','AddTopic.html'));
})

router.get('/alltopics',async(req,res)=>{
    try{
        const alltopics=await topic.find();
        res.send(alltopics);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})


router.get('/updater',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','update.html'));
})

router.post('/addtopic',async(req,res)=>{
    const ntopic =new topic({
        topic: req.body.topic,
        sourceDesc: req.body.sourceDesc,
        s1_img: req.body.s1_img,
        source1: req.body.source1,
        s2_img: req.body.s2_img,
        source2: req.body.source2,
        s3_img: req.body.s3_img,
        source3: req.body.source3,
        s4_img: req.body.s4_img,
        source4: req.body.source4,
        s5_img: req.body.s5_img,
        source5: req.body.source5,
        s6_img: req.body.s6_img,
        source6: req.body.source6,
        s7_img: req.body.s7_img,
        source7: req.body.source7,
        s8_img: req.body.s8_img,
        source8: req.body.source8,
        s9_img: req.body.s9_img,
        source9: req.body.source9,
        s10_img: req.body.s10_img,
        source10: req.body.source10
    });

    try{
        const newTopic=await ntopic.save()
        res.status(201).sendFile(path.join(__dirname,'static','AddTopic.html'));
    }catch(err){
        res.status(400).json({message : err.message});
    }
}) 


router.post('/updatesources',(req,res)=>{

    let sourcefield=req.body.Sourcefield;
    let imagefield=req.body.imagefield;

    if(sourcefield == "source1"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s1_img: req.body.imagename,   
                     source1: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source2"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s2_img: req.body.imagename,   
                     source2: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source3"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s3_img: req.body.imagename,   
                     source3: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source4"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s4_img: req.body.imagename,   
                     source4: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source5"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s5_img: req.body.imagename,   
                     source5: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source6"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s6_img: req.body.imagename,   
                     source6: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source7"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s7_img: req.body.imagename,   
                     source7: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source8"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s8_img: req.body.imagename,   
                     source8: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source9"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s9_img: req.body.imagename,   
                     source9: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }
    
    if(sourcefield == "source10"){
        const updatedTopic=async()=>{
            try{
                 const result=await topic.updateOne({topic: req.body.Topic},{
                     $set :{
                     s10_img: req.body.imagename,   
                     source10: req.body.Source  
                 }
             });
     
             console.log(result);
             res.sendFile(path.join(__dirname,'static','AddTopic.html'));
            }catch(err){
                 res.status(400).json({message : err.message});
            }
         }
     
         updatedTopic();
    }

})   



async function getTopic(req,res,next){

    let topic;
    try{
        topic=await topic.find({"topic":req.body.Topic})
        if(topic==null){
            return res.status(404).json({message:"Cannot find topic!"});
        }
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }  

    res.topic=topic;
    next();
}

module.exports=router