"use strict"
import { reqInfo } from '../../helpers/winston_logger'
import { blogModel} from '../../database'
import { apiResponse } from '../../common'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId


export const add_blog = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body
        // search = new RegExp(`^${body.name}$`, "ig")
    // let user: any = req.header('user')
    // body.createdBy = user._id
    try {
        let isExist = await blogModel.findOne({ title: { "$regex" : body.title , "$options" : "i"},isActive:true })
        console.log(isExist,"dsfdfsdfd")
        if (isExist) {
            return res.status(409).json(new apiResponse(409, `Already Blog breed Register`, {}, {}))
        }
        let response = await new blogModel(body).save()
        if (response) return res.status(200).json(new apiResponse(200, `Blog breed Successfully Added`, {}, {}))
        else return res.status(400).json(new apiResponse(400, `Add Blog breed Error In Database`, {}, `${response}`))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const get_blog = async (req: Request, res: Response) => {
    reqInfo(req)
    try {
        let response = await blogModel.find({isActive:true}).sort({ createdAt: -1 })
        if (response) return res.status(200).json(new apiResponse(200, `Get Blog breed Successfully`, response, {}))
        else return res.status(400).json(new apiResponse(400, `Blog breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
} 

export const update_blog = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body,
        id = body?.id
    //     user: any = req.header('user')
    // body.updatedBy = user._id
    try {
        let isExist = await blogModel.findOne({ title: { "$regex" : body.title , "$options" : "i"},isActive:true })
        if (isExist) {
            let isExist1 = await blogModel.findOne({ title: { "$regex" : body.title , "$options" : "i"},_id: body.id,isActive:true })
            if(isExist1){
                delete body?.id
            let response = await blogModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true}, body)
            if (response) {
                // if (response.image != body?.image) {
                //     let [folder_name, image_name] = await URL_decode(response?.image)
                //     await deleteImage(image_name, folder_name)
                // }
                return res.status(200).json(new apiResponse(200, `Blog breed Successfully Update`, {}, {}))
            }
            else return res.status(404).json(new apiResponse(404, `Blog breed With The Specified Id Does Not Exists`, {}, {})) 
            }else{
                return res.status(409).json(new apiResponse(409, `Already Blog breed Register`, {}, {}))
            }
           
        }else{
            delete body?.id
            let response = await blogModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true}, body)
            if (response) {
                // if (response.image != body?.image) {
                //     let [folder_name, image_name] = await URL_decode(response?.image)
                //     await deleteImage(image_name, folder_name)
                // }
                return res.status(200).json(new apiResponse(200, `Blog breed Successfully Update`, {}, {}))
            }
            else return res.status(404).json(new apiResponse(404, `Blog breed With The Specified Id Does Not Exists`, {}, {}))
        }
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const by_id_blog = async (req: Request, res: Response) => {
    reqInfo(req)
    let id = req.params.id
    try {
        let response = await blogModel.findOne({ _id: ObjectId(id),isActive:true})
        if (response) return res.status(200).json(new apiResponse(200, `Blog breed By Id Get Successfully`, response, {}))
        else return res.status(404).json(new apiResponse(404, `Blog breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const delete_blog = async (req: Request, res: Response) => {
    reqInfo(req)
    let id = req.params.id
    try {
        let response = await blogModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true },{isActive:false})
        if (response) {
            // let [folder_name, image_name] = await URL_decode(response?.image)
            // await deleteImage(image_name, folder_name)
            return res.status(200).json(new apiResponse(200, `Blog breed Successfully Delete`, {}, {}))
        }
        return res.status(404).json(new apiResponse(404, `Blog breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}