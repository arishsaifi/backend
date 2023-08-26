const express = require('express');
const  app = express();

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname,"/index.html");
})

app.listen(3000,()=>{
    console.log("app started on port 3000");
})