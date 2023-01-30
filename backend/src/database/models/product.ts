import { boolean, string } from "joi";

const mongoose = require('mongoose')
const validator = require("validator");
const productSchema: any = new mongoose.Schema({
      name:{
        type: String,default:null
      },
      description:{
        type: String,default:null
      },
      price:{
        type: String,default:null
      },
      image:{ type: [{ type: String }], default: null },
      isActive: { type: Boolean, default: true },
      isBlock: { type: Boolean, default: false },
      rating: { type: Number, default: 0 }
        
        
        
        
        
}, { timestamps: true }
)
productSchema.index({ name: 1 })

export const productModel = mongoose.model('product', productSchema);