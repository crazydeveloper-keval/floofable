"use strict"
import * as Joi from "joi"
import { apiResponse } from '../common'
import { isValidObjectId } from 'mongoose'
import { Request, Response } from 'express'


export const add = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        // userId: Joi.string().required().error(new Error('userId is required!')),
        name: Joi.string().required().error(new Error('Name Is Required!')),
        specialization: Joi.string().error(new Error('specialization Is Required!')),
        gender: Joi.string().error(new Error('gender Is Required!')),
        city: Joi.string().error(new Error('city Is Required!')),
        registration: Joi.string().error(new Error('registration Is Required!')),
        council: Joi.string().error(new Error('council Is Required!')),
        year: Joi.string().error(new Error('year Is Required!')),
        degree: Joi.string().error(new Error('degree Is Required!')),
        collage: Joi.string().error(new Error('collage Is Required!')),
        completion: Joi.string().error(new Error('completion Is Required!')),
        experience: Joi.string().error(new Error('experience Is Required!')),
        practice: Joi.string().error(new Error('practice Is Required!')),
        Estname: Joi.string().error(new Error('Estname Is Required!')),
        Estcity: Joi.string().error(new Error('Estcity Is Required!')),
        Estlocality: Joi.string().error(new Error('Estlocality Is Required!')),
        // identityProof: Joi.string().error(new Error('identityProof Is Required!')),
        // registrationProof: Joi.string().error(new Error('registrationProof Is Required!')),
        // ownershipProof: Joi.string().error(new Error('ownershipProof Is Required!')),
        // iam: Joi.string().error(new Error('iam Is Required!')),
        // consultionFees: Joi.string().error(new Error('consultionFees Is Required!')),
        // consultionHours: Joi.string().error(new Error('consultionHours Is Required!')),
        // phoneNumber: Joi.string().error(new Error('phoneNumber Is Required!')),
        // email: Joi.string().error(new Error('email Is Required!')),
        // address: Joi.string().error(new Error('address Is Required!')),
        // Esttime: Joi.array().error(new Error('Esttime Is Required!')),
        // latitude: Joi.number().error(new Error('latitude Is Required!')),
        // longitude: Joi.number().error(new Error('longitude Is Required!')),
        // isSection: Joi.number().error(new Error('isSection Is Required!')),
    
    })
    schema.validateAsync(req.body).then(result => {
        return next()
    }).catch(error => { res.status(400).json(new apiResponse(400, error.message, {}, {})) })
}

export const update = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        id: Joi.string().required().error(new Error('Id Is Required!')),
        name: Joi.string().error(new Error('Name Is Required!')),
        specialization: Joi.string().error(new Error('specialization Is Required!')),
        gender: Joi.string().error(new Error('gender Is Required!')),
        city: Joi.string().error(new Error('city Is Required!')),
        registration: Joi.string().error(new Error('registration Is Required!')),
        council: Joi.string().error(new Error('council Is Required!')),
        year: Joi.string().error(new Error('year Is Required!')),
        degree: Joi.string().error(new Error('degree Is Required!')),
        collage: Joi.string().error(new Error('collage Is Required!')),
        completion: Joi.string().error(new Error('completion Is Required!')),
        experience: Joi.string().error(new Error('experience Is Required!')),
        practice: Joi.string().error(new Error('practice Is Required!')),
        Estname: Joi.string().error(new Error('Estname Is Required!')),
        Estcity: Joi.string().error(new Error('Estcity Is Required!')),
        Estlocality: Joi.string().error(new Error('Estlocality Is Required!')),
        identityProof: Joi.string().error(new Error('identityProof Is Required!')),
        registrationProof: Joi.string().error(new Error('registrationProof Is Required!')),
        ownershipProof: Joi.string().error(new Error('ownershipProof Is Required!')),
        iam: Joi.string().error(new Error('iam Is Required!')),
        consultionFees: Joi.string().error(new Error('consultionFees Is Required!')),
        consultionHours: Joi.string().error(new Error('consultionHours Is Required!')),
        phoneNumber: Joi.string().error(new Error('phoneNumber Is Required!')),
        email: Joi.string().error(new Error('email Is Required!')),
        address: Joi.string().error(new Error('address Is Required!')),
        Esttime: Joi.array().error(new Error('Esttime Is Required!')),
        latitude: Joi.number().error(new Error('latitude Is Required!')),
        longitude: Joi.number().error(new Error('longitude Is Required!')),
        isSection: Joi.number().error(new Error('isSection Is Required!')),
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