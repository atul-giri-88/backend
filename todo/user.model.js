import mongoose from "mongoose";
 const user=new mongoose.Schema( 
    {
          username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true

          },
          emil:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
          },

          password:{
            type:String,
            required:true,
            unique:true
          },
        },
        {timestamps:true}
    )
        export const User= mongoose.model("user",userschema)