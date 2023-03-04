const express=require("express");
const dotenv=require("dotenv").config();
const app=express();
const openaiRoute=require("./routes/openaiRoutes.js")

app.use('/openai',openaiRoute);

const port=process.env.PORT || 5000;
const key=process.env.OPENAI_API_KEY;


app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})