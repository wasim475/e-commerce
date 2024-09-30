const express = require("express")
const _ = express.Router()
const emailValidation = require("../../Utilities/emailValidation")
const passwordValidaton = require("../../Utilities/passwordValidaton")

_.post("/registration", (req,res)=>{
    const {name, email, password} = req.body;
    if(!name){
        res.send("Name is required.")
    } else if(!email){
        res.send("email is required.")
    } else if(!password){
        res.send("password is required.")
    }else{
        if(email){
            if(!emailValidation(email)){
                return res.send("invalid email")
            }
        }
        if(password){
            if(!passwordValidaton(password)){
                return res.send("make password with letter, atleast one special character, atleast one number")
            }
        }
        res.send("registration done.")
    }
})
module.exports = _;