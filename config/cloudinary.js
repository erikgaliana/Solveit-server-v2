const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });
  
  
var storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'solve-it-app',
    allowedFormats: ['jpg', 'png'],
     }); 
     
     
 var parser = multer({ storage: storage }); 
module.exports = parser





 