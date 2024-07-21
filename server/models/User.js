import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
    DOB:{
        type:Date,
        required:true,
    },
  },{
    timestamps:true,
    
    });

const User = model("User , userSchema");

export default User;