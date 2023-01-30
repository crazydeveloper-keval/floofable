import { boolean, string } from "joi";

const mongoose = require('mongoose')
const validator = require("validator");
const orderSchema: any = new mongoose.Schema({
      price:{
        type: Number,default:0
      },
      address:{
        type: String,default:null
      },
      status:{
        type: Number,default:0                               //0 pending  //1 isgoing  //2 reject //3 completed
      },
      userId:{ type: mongoose.Schema.Types.ObjectId, default: null },
      productId:{ type: mongoose.Schema.Types.ObjectId, default: null },
      quantity:{
        type: Number,default:0                               
      },
      isActive: { type: Boolean, default: true },
      isBlock: { type: Boolean, default: false },
        
        
        
        
        
}, { timestamps: true }
)

export const orderModel = mongoose.model('order', orderSchema);