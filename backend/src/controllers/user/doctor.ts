"use strict"
import { reqInfo } from '../../helpers/winston_logger'
import { doctorModel} from '../../database'
import { apiResponse } from '../../common'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { responseMessage } from '../../helpers'
const ObjectId = mongoose.Types.ObjectId


export const add_doctor = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body
        // search = new RegExp(`^${body.name}$`, "ig")
    // let user: any = req.header('user')
    // body.createdBy = user._id
    try {
        let isExist = await doctorModel.findOne({ name: { "$regex" : body.name , "$options" : "i"},isActive:true })
        console.log(isExist,"dsfdfsdfd")
        if (isExist) {
            return res.status(409).json(new apiResponse(409, `Already Doctor breed Register`, {}, {}))
        }
        let response = await new doctorModel(body).save()
        if (response) return res.status(200).json(new apiResponse(200, `Doctor breed Successfully Added`, {}, {}))
        else return res.status(400).json(new apiResponse(400, `Add Doctor breed Error In Database`, {}, `${response}`))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const get_doctor = async (req: Request, res: Response) => {
    reqInfo(req)
    try {
        let response = await doctorModel.find({isActive:true}).sort({ createdAt: -1 })
        if (response) return res.status(200).json(new apiResponse(200, `Get Doctor breed Successfully`, response, {}))
        else return res.status(400).json(new apiResponse(400, `Doctor breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
} 

export const update_doctor = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body,
        id = body?.id
    //     user: any = req.header('user')
    // body.updatedBy = user._id
    try {
        let isExist = await doctorModel.findOne({ name: { "$regex" : body.name , "$options" : "i"},isActive:true })
        if (isExist) {
            let isExist1 = await doctorModel.findOne({ name: { "$regex" : body.name , "$options" : "i"},_id: body.id,isActive:true })
            if(isExist1){
                delete body?.id
            let response = await doctorModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true}, body)
            if (response) {
                // if (response.image != body?.image) {
                //     let [folder_name, image_name] = await URL_decode(response?.image)
                //     await deleteImage(image_name, folder_name)
                // }
                return res.status(200).json(new apiResponse(200, `Doctor breed Successfully Update`, {}, {}))
            }
            else return res.status(404).json(new apiResponse(404, `Doctor breed With The Specified Id Does Not Exists`, {}, {})) 
            }else{
                return res.status(409).json(new apiResponse(409, `Already Doctor breed Register`, {}, {}))
            }
           
        }else{
            delete body?.id
            let response = await doctorModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true}, body)
            if (response) {
                // if (response.image != body?.image) {
                //     let [folder_name, image_name] = await URL_decode(response?.image)
                //     await deleteImage(image_name, folder_name)
                // }
                return res.status(200).json(new apiResponse(200, `Doctor breed Successfully Update`, {}, {}))
            }
            else return res.status(404).json(new apiResponse(404, `Doctor breed With The Specified Id Does Not Exists`, {}, {}))
        }
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const by_id_doctor = async (req: Request, res: Response) => {
    reqInfo(req)
    let id = req.params.id
    try {
        let response = await doctorModel.findOne({ _id: ObjectId(id),isActive:true})
        if (response) return res.status(200).json(new apiResponse(200, `Doctor breed By Id Get Successfully`, response, {}))
        else return res.status(404).json(new apiResponse(404, `Doctor breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const delete_doctor = async (req: Request, res: Response) => {
    reqInfo(req)
    let id = req.params.id
    try {
        let response = await doctorModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true },{isActive:false})
        if (response) {
            // let [folder_name, image_name] = await URL_decode(response?.image)
            // await deleteImage(image_name, folder_name)
            return res.status(200).json(new apiResponse(200, `Doctor breed Successfully Delete`, {}, {}))
        }
        return res.status(404).json(new apiResponse(404, `Doctor breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const get_doctor_pagination = async (req: Request, res: Response) => {
    reqInfo(req)
    let { limit, page,search,consultionFees,rating} = req.body,

        skip: number,
        match: any = {},count: number,
        response: any
    limit = parseInt(limit)
    skip = ((parseInt(page) - 1) * parseInt(limit))
    try {
        match = {
            isActive: true,
            isBlock: false,
        }


        
        if (search && search != "") {
            let firstNameArray: Array<any> = []
            // let lastNameArray: Array<any> = []
            search = search.split(" ")
            await search.forEach(data => {
                firstNameArray.push({ name: { $regex: data, $options: 'si' } })
                // lastNameArray.push({ lastName: { $regex: data, $options: 'si' } })
            })
            match.$or = [{ $and: firstNameArray }];
        }
        if (consultionFees) match.consultionFees = consultionFees
        if (rating) match.rating = rating
        response = await doctorModel.aggregate([
            { $match: match },
            { $sort: { createdAt: -1 } },
            { $skip: skip },
            { $limit: limit },
            // {
            //     $lookup: {
            //         from: "users",
            //         let: { createdBy: '$createdBy' },
            //         pipeline: [
            //             {
            //                 $match: {
            //                     $expr: {
            //                         $and: [
            //                             { $eq: ['$_id', '$$createdBy'] },
            //                             { $eq: ['$isActive', true] },
            //                             { $eq: ['$isBlock', false] },
            //                         ],
            //                     },
            //                 }
            //             },
            //             { $project: { username: 1, image: 1 } },
            //         ],
            //         as: "user"
            //     }
            // },
            { $project: { createdAt: 0, updatedAt: 0, __v: 0 } },
        ])
        count = await doctorModel.countDocuments(match)

        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess('doctor'), {
            doctor_data: response,
            state: {
                page,
                limit,
                page_limit: Math.ceil(count / limit), data_count: count
            }
        }, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}