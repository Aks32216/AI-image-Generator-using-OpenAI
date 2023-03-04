const express=require("express");
const dotenv=require("dotenv").config();
const app=express();

const port=process.env.PORT || 5000;
const key=process.env.OPENAI_API_KEY;


app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})