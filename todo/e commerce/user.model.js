import mongoose from "mongoose";
const userschema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },

    
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
},


    password :{
        type:String,
        required:true,
        unique:true

},

},{timestamps:true});
export const user =mongoose.model("user",userschema)