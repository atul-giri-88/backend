 import mongoose from "mongoose";
 const ordoritemschema= new mongoose.Schema({
    productid:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product"
    },

    quantity:{
        type:Number,
        required:true,
    }
 })
const ordorschema=new mongoose.Schema({

   ordorprice:{
    type:Number,
    required:true
   },
   customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
   },
   ordoritem:{
              type:[ordoritemschema]
   },
    address:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["pending","cancelled","deliveerd"],
        default:"pending"
    }
},{timestamps:true})
export const ordor=mongoose.model("ordor",ordorschema)