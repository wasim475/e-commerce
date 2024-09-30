const mongoose = require('mongoose');

 const dbConnection = ()=>{

    const {DB_USER,DB_PASS,DB_NAME} = process.env;

     mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.uc340vx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
     .then(() => console.log('E-Commerce Database Connected!'));
 } 

  module.exports = dbConnection;