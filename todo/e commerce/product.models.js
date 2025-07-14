import mongoose from "mongoose";
import { category } from "./category.models";
const productschema= new mongoose.Schema({

    description:{
        required:true,
        type:String
        
    },


    name:{
        required:true,
        type:String
    },


    productimage:{
        type:string
    },

    price:{
        type:Number,
        default:0 
    },
    stock:{
        default:0 ,
        type:Number
    },


    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true,
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },


},{timestamps:true})
export const product=mongoose.model("product",productschema)