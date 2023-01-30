import { boolean, string } from "joi";

const mongoose = require('mongoose')
const validator = require("validator");
const blogSchema: any = new mongoose.Schema({
      title:{
        type: String,default:null
      },
      image:{
        type: String,default:null
      },
      description:{
        type: String,default:null
      },
      isActive: { type: Boolean, default: true },
      isBlock: { type: Boolean, default: false },
        
        
        
        
        
}, { timestamps: true }
)

export const blogModel = mongoose.model('blog', blogSchema);