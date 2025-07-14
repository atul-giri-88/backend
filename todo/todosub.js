import mongoose from "mongoose";
const todoschema=new mongoose.Schema(
    {
             content:{
                type:String,
                required:true,
             },
             complete:{
                type:Boolean,
                default:false
             },
             createdby:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user",
             },
},{timestamps:true})
export const todo=mongoose.model("todo",todoschema)