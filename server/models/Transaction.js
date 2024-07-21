import { Schema, model } from "mongoose";

// creadit: money comes in
// debit: money goes out
const transactionSchema = new Schema({

    amount:{
      type:Number,
      required:true,

    },
    category:{
        type:String,
        default: "others",
        
      },
      type:{
        type:String,        
        enum:["debit","credit"],     
      },
      user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
      },
    },{
        timestamps:true,
      });
const Transaction = model("Transaction", transactionSchema);

export default Transaction;