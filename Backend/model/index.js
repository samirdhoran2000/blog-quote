const mongoose = require('mongoose');

const db = async() => {
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/Blog",{useNewUrlParser:true,useUnifiedTopology:true})
        .then(() => {
          console.log('mongodb connected successfully ');
      })
        .catch((err) => {
          console.log("some went wrong while connecting mongodb ",err);
        });
    
}

module.exports = {db};