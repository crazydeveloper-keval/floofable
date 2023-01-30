"use strict"
import * as Joi from "joi"
import { apiResponse } from '../common'
import { isValidObjectId } from 'mongoose'
import { Request, Response } from 'express'


export const add = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        // userId: Joi.string().required().error(new Error('userId is required!')),
        title: Joi.string().required().error(new Error('Name Is Required!')),
        image: Joi.string().required().error(new Error('description Is Required!')),
        description: Joi.string().required().error(new Error('price Is Required!')),
        
    
    })
    schema.validateAsync(req.body).then(result => {
        return next()
    }).catch(error => { res.status(400).json(new apiResponse(400, error.message, {}, {})) })
}

export const update = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        id: Joi.string().required().error(new Error('Id Is Required!')),
        title: Joi.string().error(new Error('Name Is Required!')),
        image: Joi.string().error(new Error('description Is Required!')),
        description: Joi.string().error(new Error('price Is Required!')),
    })
    schema.validateAsync(req.body).then(result => {
        if (!isValidObjectId(result.id)) return res.status(400).json(new apiResponse(400, "Invalid Id Format", {}, {}));
        return next()
    }).catch(error => { res.status(400).json(new apiResponse(400, error.message, {}, {})) })
}
export const by_id = async (req: Request, res: Response, next: any) => {
    if (!isValidObjectId(req.params.id)) return res.status(400).json(new apiResponse(400, 'Invalid Id', {}, {}));
    next()
}