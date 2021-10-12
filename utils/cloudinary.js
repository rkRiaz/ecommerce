// const cloudinary = require("cloudinary").v2;
const cloudinary = require("cloudinary");
const path = require("path"); 

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
}); 


exports.uploads = (file, folder) => {
  let ext = path.extname(file);
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) => {
      resolve({
        id: result.public_id+ext
      })
    }, {
      resource_type: 'auto',
      folder: folder
    })
  })
}

// module.exports = cloudinary;