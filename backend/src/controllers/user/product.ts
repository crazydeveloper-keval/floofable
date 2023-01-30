"use strict"
import { reqInfo } from '../../helpers/winston_logger'
import { productModel} from '../../database'
import { apiResponse } from '../../common'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { responseMessage } from '../../helpers'
const ObjectId = mongoose.Types.ObjectId


export const add_product = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body
        // search = new RegExp(`^${body.name}$`, "ig")
    // let user: any = req.header('user')
    // body.createdBy = user._id
    try {
        let isExist = await productModel.findOne({ name: { "$regex" : body.name , "$options" : "i"},isActive:true })
        console.log(isExist,"dsfdfsdfd")
        if (isExist) {
            return res.status(409).json(new apiResponse(409, `Already Product breed Register`, {}, {}))
        }
        let response = await new productModel(body).save()
        if (response) return res.status(200).json(new apiResponse(200, `Product breed Successfully Added`, {}, {}))
        else return res.status(400).json(new apiResponse(400, `Add Product breed Error In Database`, {}, `${response}`))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const get_product = async (req: Request, res: Response) => {
    reqInfo(req)
    try {
        let response = await productModel.find({isActive:true}).sort({ createdAt: -1 })
        if (response) return res.status(200).json(new apiResponse(200, `Get Product breed Successfully`, response, {}))
        else return res.status(400).json(new apiResponse(400, `Product breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
} 

export const update_product = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body,
        id = body?.id
    //     user: any = req.header('user')
    // body.updatedBy = user._id
    try {
        let isExist = await productModel.findOne({ name: { "$regex" : body.name , "$options" : "i"},isActive:true })
        if (isExist) {
            let isExist1 = await productModel.findOne({ name: { "$regex" : body.name , "$options" : "i"},_id: body.id,isActive:true })
            if(isExist1){
                delete body?.id
            let response = await productModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true}, body)
            if (response) {
                // if (response.image != body?.image) {
                //     let [folder_name, image_name] = await URL_decode(response?.image)
                //     await deleteImage(image_name, folder_name)
                // }
                return res.status(200).json(new apiResponse(200, `Product breed Successfully Update`, {}, {}))
            }
            else return res.status(404).json(new apiResponse(404, `Product breed With The Specified Id Does Not Exists`, {}, {})) 
            }else{
                return res.status(409).json(new apiResponse(409, `Already Product breed Register`, {}, {}))
            }
           
        }else{
            delete body?.id
            let response = await productModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true}, body)
            if (response) {
                // if (response.image != body?.image) {
                //     let [folder_name, image_name] = await URL_decode(response?.image)
                //     await deleteImage(image_name, folder_name)
                // }
                return res.status(200).json(new apiResponse(200, `Product breed Successfully Update`, {}, {}))
            }
            else return res.status(404).json(new apiResponse(404, `Product breed With The Specified Id Does Not Exists`, {}, {}))
        }
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const by_id_product = async (req: Request, res: Response) => {
    reqInfo(req)
    let id = req.params.id
    try {
        let response = await productModel.findOne({ _id: ObjectId(id),isActive:true})
        if (response) return res.status(200).json(new apiResponse(200, `Product breed By Id Get Successfully`, response, {}))
        else return res.status(404).json(new apiResponse(404, `Product breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const delete_product = async (req: Request, res: Response) => {
    reqInfo(req)
    let id = req.params.id
    try {
        let response = await productModel.findOneAndUpdate({ _id: ObjectId(id),isActive:true },{isActive:false})
        if (response) {
            // let [folder_name, image_name] = await URL_decode(response?.image)
            // await deleteImage(image_name, folder_name)
            return res.status(200).json(new apiResponse(200, `Product breed Successfully Delete`, {}, {}))
        }
        return res.status(404).json(new apiResponse(404, `Product breed With The Specified Id Does Not Exists`, {}, {}))
    } catch (error) {
        return res.status(500).json(new apiResponse(500, "Internal Server Error", {}, error))
    }
}

export const get_product_pagination = async (req: Request, res: Response) => {
    reqInfo(req)
    let { limit, page,search,price,rating} = req.body,

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
        if (price) match.price = price
        if (rating) match.rating = rating
        response = await productModel.aggregate([
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
        count = await productModel.countDocuments(match)

        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess('product'), {
            product_data: response,
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