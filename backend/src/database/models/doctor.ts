import { boolean, string } from "joi";

const mongoose = require('mongoose')
const doctorSchema: any = new mongoose.Schema({
      name:{
        type: String,default:null
      },
      specialization:{
        type: String,default:null
      },
      gender:{
        type: String,default:null
      },
      city:{
        type: String,default:null
      },
      registration:{
        type: String,default:null
      },
      council:{
        type: String,default:null
      },
      year:{
        type: String,default:null
      },
      degree:{
        type: String,default:null
      },
      collage:{
        type: String,default:null
      },
      completion:{
        type: String,default:null
      },
      experience:{
        type: String,default:null
      },
      practice:{
        type: String,default:null
      },
      Estname:{
        type: String,default:null
      },
      Estcity:{
        type: String,default:null
      },
      Estlocality:{
        type: String,default:null
      },                                                  //section a
      identityProof:{
        type: String,default:null
      },
      registrationProof:{
        type: String,default:null
      },
      ownershipProof:{
        type: String,default:null
      },
      iam:{
        type: String,default:null
      },
      Esttime:{ type: [], default: [] },
      consultionFees:{
        type: String,default:null
      },
      consultionHours:{
        type: String,default:null
      },
      phoneNumber:{
        type: String,default:null
      },
      email:{
        type: String,default:null
      },
      address:{
        type: String,default:null
      },
      latitude: { type: Number, default: 0 },
      longitude: { type: Number, default: 0 },
      isSection:{ type: Number, default: 0 },    //0==a   1==b   2==c
      isActive: { type: Boolean, default: true },
      isBlock: { type: Boolean, default: false },
      rating: { type: Number, default: 0 }
        
        
        
        
}, { timestamps: true }
)
doctorSchema.index({ name: 1 })

export const doctorModel = mongoose.model('doctor', doctorSchema);