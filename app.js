const express=require('express');
const bodyParser=require('body-parser');
const path=require("path");
const { urlencoded } = require('body-parser');
const app=express();
const mysql=require('mysql')
const fs=require('fs')
const multer=require('multer');
const { query } = require('express');
const port=process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/public',express.static(path.join(__dirname,'static')));


const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"cc"
});

db.connect((err)=>{
    if(err){
       console.log(err);
    }

    else{
        console.log('mysql connected..')
    }

})


app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,'static','AddTopic.html'));
   
})


app.get('/updater',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','update.html'));  
})

app.get('/uploader',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','imageupload.html'))
})

app.post("/addtopic",(req,res)=>{ 
    let topic=req.body.Topic;
    let topicdesc=req.body.SourceDesc;
    let s1_img=req.body.S1_img;
    let s1=req.body.Source1;
    let s2_img=req.body.S2_img;
    let s2=req.body.Source2;
    let s3_img=req.body.S3_img;
    let s3=req.body.Source3;
    let s4_img=req.body.S4_img;
    let s4=req.body.Source4;
    let s5_img=req.body.S5_img;
    let s5=req.body.Source5;
    let s6_img=req.body.S6_img;
    let s6=req.body.Source6;
    let s7_img=req.body.S7_img;
    let s7=req.body.Source7;
    let s8_img=req.body.S8_img;
    let s8=req.body.Source8;
    let s9_img=req.body.S9_img;
    let s9=req.body.Source9;
    let s10_img=req.body.S10_img;
    let s10=req.body.Source10;

    let sql="INSERT INTO options SET Topic=?, SourceDesc=?, S1_img=?, Source1=?, S2_img=?, Source2=?, S3_img=?, Source3=?, S4_img=?, Source4=?, S5_img=?, Source5=?, S6_img=?, Source6=?, S7_img=?, Source7=?, S8_img=?, Source8=?, S9_img=?, Source9=?, S10_img=?, Source10=?";
    db.query(sql,[topic,topicdesc,s1_img,s1,s2_img,s2,s3_img,s3,s4_img,s4,s5_img,s5,s6_img,s6,s7_img,s7,s8_img,s8,s9_img,s9,s10_img,s10],(err,result)=>{
        if (err) console.log(err);
        else{
            res.sendFile(path.join(__dirname,'static','AddTopic.html'));
        }
    })
})


app.get("/alltopics",(req,res)=>{
    let sql="SELECT * FROM  options";
    db.query(sql,(err,result)=>{
        res.setHeader('Content-Type','application/json');
        res.send(JSON.stringify(result,null,4));
        console.log(result);
    });
})


app.post('/updatesources',(req,res)=>{
    let topic=req.body.Topic;
    let imagefield=req.body.imagefield;
    let image=req.body.imagename;
    let sourcefield=req.body.Sourcefield;
    let source=req.body.Source;

    let sql="UPDATE options SET "+ sourcefield +" = ?, "+ imagefield+" = ? WHERE Topic = ?";
    db.query(sql,[source,image,topic],(err,result)=>{
        if (err) console.log(err);
        else{
            res.sendFile(path.join(__dirname,'static','update.html'));
        }
    })
})



// const handleError = (err, res) => {
//     res
//       .status(500)
//       .contentType("text/plain")
//       .end("Oops! Something went wrong!");
//   };

// const upload = multer({
//     dest: "./images"
//   });


// app.post('/uploadimage',upload.array('Source',10),(req,res,next)=>{
//     // console.log(req.files);

//     const files=req.files;

//     let sql="UPDATE options SET S1_img = ?, S2_img = ?,  S3_img = ?,  S4_img = ?,  S5_img = ?,  S6_img = ?,  S7_img = ?,  S8_img = ?,  S9_img = ?,  S10_img = ? WHERE  Topic = ? ";

//     let toSend=new Array(11);

//     for (let i =0;i<files.length;i++){
//         toSend[i]=files[i].path;
//     }

//     for(let i=files.length;i<10;i++){
//         toSend[i]=null;
//     }
//     toSend[10]=req.body.Topic;

//     console.log(toSend);

//     db.query(sql,toSend,(err,result)=>{
//         if (err) console.log(err);
//         else{
//             res.sendFile(path.join(__dirname,'static','imageupload.html'));
//         }
//     });
// })

app.listen(port,()=>{
    console.log(`Website running on port ${port}`);
});