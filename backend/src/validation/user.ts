"use strict"
import * as Joi from "joi"
import { apiResponse } from '../common'
import { isValidObjectId } from 'mongoose'
import { Request, Response } from 'express'

export const signUp = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        email: Joi.string().lowercase().trim().error(new Error('email is string!')),
        password: Joi.string().trim().error(new Error('password is string!')),
        username: Joi.string().trim().error(new Error('username is string!')),
        userType: Joi.number().error(new Error('userType is number')),
        contactNumber: Joi.number().error(new Error('contactNumber is number')),
        countryCode: Joi.number().error(new Error('countryCode is number')),
    })
    schema.validateAsync(req.body).then(result => {
        req.body = result
        return next()
    }).catch(error => {
        res.status(400).json(new apiResponse(400, error.message, {}, {}))
    })
}

export const login = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        email: Joi.string().lowercase().max(50).error(new Error('email is string!')),
        password: Joi.string().max(20).required().error(new Error('password is required!')),
        deviceToken: Joi.string().error(new Error('deviceToken is string!')),
    })
    schema.validateAsync(req.body).then(result => {
        req.body = result
        return next()
    }).catch(error => {
        res.status(400).json(new apiResponse(400, error.message, {}, {}))
    })
}

export const change_password = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        oldPassword: Joi.string().required().error(new Error('oldPassword is string!')),
        newPassword: Joi.string().required().error(new Error('newPassword is string!')),
    })
    schema.validateAsync(req.body).then(result => {
        return next()
    }).catch(error => {
        res.status(400).json(new apiResponse(400, error.message, {}, {}))
    })
}

export const update_profile = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        username: Joi.string().error(new Error('username is string!')),
        firstName: Joi.string().error(new Error('firstName is string!')),
        lastName: Joi.string().error(new Error('lastName is string!')),
        // email: Joi.string().error(new Error('email is string!')),
        dob: Joi.string().error(new Error('dob is string!')),
        contactNumber: Joi.number().error(new Error('contactNumber is number!')),
        address: Joi.string().error(new Error('address is string!')),
        latitude: Joi.number().error(new Error('latitude is number!')),
        longitude: Joi.number().error(new Error('longitude is number!')),
        city: Joi.string().error(new Error('city is string!')),
        state: Joi.string().error(new Error('state is string!')),
        image: Joi.string().error(new Error('image is string!')),
        publicProfile: Joi.object().error(new Error('publicProfile is object!')),
        privateSocialVerification: Joi.object().error(new Error('privateSocialVerification is object!')),
        privateAccountVerification: Joi.object().error(new Error('privateAccountVerification is object!')),
        publicChefOffering: Joi.object().error(new Error('publicChefOffering is object!')),
    })
    schema.validateAsync(req.body).then(result => {
        return next()
    }).catch(error => {
        res.status(400).json(new apiResponse(400, error.message, {}, {}))
    })
}

export const logout = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        deviceToken: Joi.string().error(new Error('deviceToken is string!')),
    })
    schema.validateAsync(req.body).then(result => {
        return next()
    }).catch(error => {
        res.status(400).json(new apiResponse(400, error.message, {}, {}))
    })
}

export const forgot_password = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        email: Joi.string().lowercase().required().error(new Error('email is required!')),
    })
    schema.validateAsync(req.body).then(async result => {
        req.body = result
        return next()
    }).catch(async error => {
        res.status(400).json(new apiResponse(400, error.message, {}, {}));
    })
}

export const otp_verification = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        otp: Joi.number().error(new Error('otp is number!')),
    })
    schema.validateAsync(req.body).then(result => {
        return next()
    }).catch(error => {
        res.status(400).json(new apiResponse(400, error.message, {}, {}))
    })
}

export const reset_password = async (req: Request, res: Response, next: any) => {
    const schema = Joi.object({
        // id: Joi.string().required().error(new Error('id is required! ')),
        otp: Joi.number().required().error(new Error('otp is required! ')),
        password: Joi.string().max(20).required().error(new Error('password is required! & max length is 20')),
    })
    schema.validateAsync(req.body).then(async result => {
        if (!isValidObjectId(result.id)) return res.status(400).json(new apiResponse(400, 'invalid id', {}, {}))
        return next()
    }).catch(async error => {
        res.status(400).json(new apiResponse(400, error.message, {}, {}));
    })
}

export const by_id = async (req: Request, res: Response, next: any) => {
    if (!isValidObjectId(req.params.id)) return res.status(400).json(new apiResponse(400, 'invalid id', {}, {}))
    return next()
}