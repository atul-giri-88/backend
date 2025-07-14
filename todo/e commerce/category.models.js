import mongoose from "mongoose";
const categoryschema = new mongoose.Schema(
    {
        name:{
            name:String,
            required:true,
        }





    },{timestamps:true})
export const category =mongoose.model("category",categoryschema)