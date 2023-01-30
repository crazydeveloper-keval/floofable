"use strict"
import { reqInfo } from '../../helpers/winston_logger'
import { orderModel} from '../../database'
import { apiResponse } from '../../common'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId


export const add_order = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body
        // search = new RegExp(`^${body.name}$`, "ig")
    // let user: any = req.header('user')
    // body.createdBy = user._id
    try {
        // let isExist = await orderModel.findOne({ name: { "$regex" : body.name , "$options" : "i"},isActive:true })
        // console.log(isExist,"dsfdfsdfd")
        // if (isExist) {
        //     return res.status(409).json(new apiResponse(409, `Already Order breed Register`, {}, {}))
        // }
        let response = await new orderModel(body).save()
        if (response) return res.status(200).json(new apiResponse(200, `Order breed Successfully Added`, {}, {}))
        else return res.status(400).json(new apiResponse(400, `Add Order breed Error In Database`, {}, `${response}`))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const get_order = async (req: Request, res: Response) => {
    reqInfo(req)
    try {
        let response = await orderModel.find({isActive:true}).sort({ createdAt: -1 })
        if (response) return res.status(200).json(new apiResponse(200, `Get Order breed Successfully`, response, {}))
        else return res.status(400).json(new apiResponse(400, `Order breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
} 

export const update_order = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body,
        id = body?.id
    //     user: any = req.header('user')
    // body.updatedBy = user._id
    try {
    
            let response = await orderModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true}, body)
            if (response) {
                // if (response.image != body?.image) {
                //     let [folder_name, image_name] = await URL_decode(response?.image)
                //     await deleteImage(image_name, folder_name)
                // }
                return res.status(200).json(new apiResponse(200, `Order breed Successfully Update`, {}, {}))
            }
            else return res.status(404).json(new apiResponse(404, `Order breed With The Specified Id Does Not Exists`, {}, {}))
        
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const by_orderstatus = async (req: Request, res: Response) =>{
    reqInfo(req)
    let body = req.body,
    id = body?.id

    try {
        let response = await orderModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true}, body)
        if (response) {
            // if (response.image != body?.image) {
            //     let [folder_name, image_name] = await URL_decode(response?.image)
            //     await deleteImage(image_name, folder_name)
            // }
            return res.status(200).json(new apiResponse(200, `Order  Successfully Update`, {}, {}))
        }
        else return res.status(404).json(new apiResponse(404, `Order  With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}



export const by_id_order = async (req: Request, res: Response) => {
    reqInfo(req)
    let id = req.params.id
    try {
        let response = await orderModel.findOne({ _id: ObjectId(id),isActive:true})
        if (response) return res.status(200).json(new apiResponse(200, `Order breed By Id Get Successfully`, response, {}))
        else return res.status(404).json(new apiResponse(404, `Order breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const delete_order = async (req: Request, res: Response) => {
    reqInfo(req)
    let id = req.params.id
    try {
        let response = await orderModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true },{isActive:false})
        if (response) {
            // let [folder_name, image_name] = await URL_decode(response?.image)
            // await deleteImage(image_name, folder_name)
            return res.status(200).json(new apiResponse(200, `Order breed Successfully Delete`, {}, {}))
        }
        return res.status(404).json(new apiResponse(404, `Order breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}