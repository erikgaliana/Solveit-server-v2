const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const parser = require('../config/cloudinary')
// here i just send url back to form after creation in Cloudinary, not rendering a img


router.post('/', parser.single('photo'), 
(req,res,next)=>{  
  
  const image_url = req.file.secure_url
  res.status(201).json(image_url)
})
  
module.exports = router;