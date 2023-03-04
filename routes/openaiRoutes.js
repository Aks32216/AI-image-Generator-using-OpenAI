const express=require("express");
const router=express.Router();

const {generateImage}=require("../controller/imageController.js")

router.post('/generateimage',generateImage);

module.exports=router;