const mongoose = require('mongoose');

 const dbConnection = ()=>{

     mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uc340vx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
     .then(() => console.log('E-Commerce Database Connected!'));
 } 

  module.exports = dbConnection;