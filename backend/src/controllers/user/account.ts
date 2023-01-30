"use strict"
import { forgot_password_mail, otp_verification_mail, reqInfo, responseMessage } from '../../helpers'
import { userModel } from '../../database'
import { apiResponse } from '../../common'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import { Request, Response } from 'express'
import axios from 'axios'


const ObjectId = require('mongoose').Types.ObjectId
const jwt_token_secret = config.get('jwt_token_secret')
const refresh_jwt_token_secret = config.get('refresh_jwt_token_secret')

export const signUp = async (req: Request, res: Response) => {
    reqInfo(req)
    try {
        let body = req.body,
            otpFlag = 1, // OTP has already assign or not for cross-verification
            authToken = 0
        let isAlready: any = await userModel.findOne({ email: body.email, isActive: true, isEmailVerified: true })
        if (isAlready?.isBlock == true) return res.status(403).json(new apiResponse(403, responseMessage.accountBlock, {}, {}))
        if (isAlready) return res.status(409).json(new apiResponse(409, responseMessage?.alreadyEmail, {}, {}))
        const salt = await bcryptjs.genSaltSync(10)

        const hashPassword = await bcryptjs.hash(body.password, salt)
        delete body.password
        body.password = hashPassword
        while (otpFlag == 1) {
            for (let flag = 0; flag < 1;) {
                authToken = await Math.round(Math.random() * 1000000)
                if (authToken.toString().length == 6) {
                    flag++
                }
            }
            let isAlreadyAssign = await userModel.findOne({ otp: authToken })
            if (isAlreadyAssign?.otp != authToken) otpFlag = 0
        }
        body.authToken = authToken
        body.otp = authToken
        body.loginType = 0
        body.otpExpireTime = new Date(new Date().setMinutes(new Date().getMinutes() + 10))
        await userModel.deleteOne({ email: body.email, isActive: true, isEmailVerified: false })
        let user: any = await new userModel(body).save()
        let response = await otp_verification_mail({ otp: user?.otp, ...body })
        return res.status(200).json(new apiResponse(200, response as string, {}, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const login = async (req: Request, res: Response) => {
    let body = req.body, otpFlag = 1, otp: number = 0,
        data: any
    reqInfo(req)
    try {
        data = await userModel.findOne({ email: body.email, isActive: true, isEmailVerified: true }).select('-__v -createdAt -updatedAt')
        if (!data) return res.status(400).json(new apiResponse(400, responseMessage?.invalidEmail, {}, {}))
        if (data?.isBlock == true) return res.status(403).json(new apiResponse(403, responseMessage.accountBlock, {}, {}))
        const passwordMatch = await bcryptjs.compare(body.password, data.password)
        if (!passwordMatch) return res.status(400).json(new apiResponse(400, responseMessage?.invalidPassword, {}, {}))
        const token = jwt.sign({
            _id: data._id,
            authToken: data?.authToken,
            type: data.userType,
            status: "OTP verification",
            generatedOn: (new Date().getTime())
        }, jwt_token_secret)
        const refresh_token = jwt.sign({
            _id: data._id,
            generatedOn: (new Date().getTime())
        }, refresh_jwt_token_secret)
        // await new userSessionModel({
        //     createdBy: data._id,
        //     refresh_token
        // }).save()
        if (data.userType == 0) {
            return res.status(200).json(new apiResponse(200, responseMessage?.loginSuccess, {
                _id: data._id,
                userType: data?.userType,
                username: data?.username,
                contactNumber: data?.contactNumber,
                firstName: data?.firstName,
                lastName: data?.lastName,
                email: data?.email,
                image: data?.image,
                switchToUser: data?.switchToUser,
                token,
                refresh_token
            }, {}))
        } else {
            return res.status(200).json(new apiResponse(200, responseMessage?.loginSuccess, {
                _id: data._id,
                userType: data?.userType,
                contactNumber: data?.contactNumber,
                username: data?.username,
                firstName: data?.firstName,
                lastName: data?.lastName,
                email: data?.email,
                image: data?.image,
                // switchToChef: data?.switchToChef,
                token,
                refresh_token
            }, {}))
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const otp_verification = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body
    try {
        body.isActive = true
        let data = await userModel.findOneAndUpdate(body, { $addToSet: { deviceToken: body?.deviceToken }, otp: null, otpExpireTime: null, authToken: body.otp, isEmailVerified: true })
        if (!data) return res.status(400).json(new apiResponse(400, responseMessage?.invalidOTP, {}, {}))
        if (data.isBlock == true) return res.status(403).json(new apiResponse(403, responseMessage?.accountBlock, {}, {}))
        if (new Date(data.otpExpireTime).getTime() < new Date().getTime()) return res.status(410).json(new apiResponse(410, responseMessage?.expireOTP, {}, {}))
        const token = jwt.sign({
            _id: data._id,
            authToken: body?.otp,
            type: data.userType,
            status: "OTP verification",
            generatedOn: (new Date().getTime())
        }, jwt_token_secret)
        const refresh_token = jwt.sign({
            _id: data._id,
            generatedOn: (new Date().getTime())
        }, refresh_jwt_token_secret)
        if (data.userType == 0) {
            return res.status(200).json(new apiResponse(200, responseMessage?.loginSuccess, {
                _id: data._id,
                userType: data?.userType,
                username: data?.username,
                contactNumber: data?.contactNumber,
                firstName: data?.firstName,
                lastName: data?.lastName,
                email: data?.email,
                image: data?.image,
                switchToUser: data?.switchToUser,
                token,
                refresh_token
            }, {}))
        } else {
            return res.status(200).json(new apiResponse(200, responseMessage?.loginSuccess, {
                _id: data._id,
                userType: data?.userType,
                contactNumber: data?.contactNumber,
                username: data?.username,
                firstName: data?.firstName,
                lastName: data?.lastName,
                email: data?.email,
                image: data?.image,
                // switchToChef: data?.switchToChef,
                token,
                refresh_token
            }, {}))
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}


export const forgot_password = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body,
        otpFlag = 1, // OTP has already assign or not for cross-verification
        otp = 0
    try {
        body.isActive = true
        let data = await userModel.findOne(body)
        if (!data) return res.status(400).json(new apiResponse(400, responseMessage.invalidEmail, {}, {}));
        if (data.isBlock == true) return res.status(403).json(new apiResponse(403, responseMessage.accountBlock, {}, {}));

        while (otpFlag == 1) {
            for (let flag = 0; flag < 1;) {
                otp = await Math.round(Math.random() * 1000000)
                if (otp.toString().length == 6) {
                    flag++
                }
            }
            let isAlreadyAssign = await userModel.findOne({ otp: otp })
            if (isAlreadyAssign?.otp != otp) otpFlag = 0
        }
        data.otp = otp
        let response = await forgot_password_mail(data)
        if (response) {
            await userModel.findOneAndUpdate(body, { otp, otpExpireTime: new Date(new Date().setMinutes(new Date().getMinutes() + 10)) })
            return res.status(200).json(new apiResponse(200, `${response}`, {}, {}));
        }
        else return res.status(501).json(new apiResponse(501, responseMessage.errorMail, {}, `${response}`));
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage.internalServerError, {}, error));
    }
}

export const reset_password = async (req: Request, res: Response) => {
    reqInfo(req)
    let body = req.body,
        authToken = 0,
        // id = body.id,
        otp = body?.otp
    delete body.otp
    try {
        const salt = await bcryptjs.genSaltSync(10)
        const hashPassword = await bcryptjs.hash(body.password, salt)
        delete body.password
        // delete body.id
        body.password = hashPassword

        for (let flag = 0; flag < 1;) {
            authToken = await Math.round(Math.random() * 1000000)
            if (authToken.toString().length == 6) {
                flag++
            }
        }
        body.authToken = authToken
        body.otp = 0
        body.otpExpireTime = null
        let response = await userModel.findOneAndUpdate({ isActive: true, otp: otp }, body, { new: true })
        if (response) {
            return res.status(200).json(new apiResponse(200, responseMessage?.resetPasswordSuccess, { action: "please go to login page" }, {}))
        }
        else return res.status(501).json(new apiResponse(501, responseMessage?.resetPasswordError, response, {}))

    } catch (error) {
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const get_profile = async (req: Request, res: Response) => {
    reqInfo(req)
    let user: any = req.header('user')
    try {
        let data = await userModel.findOne({ _id: ObjectId(user?._id), isActive: true, isBlock: false }, { createdAt: 0, updatedAt: 0, __v: 0, password: 0, authToken: 0, deviceToken: 0 })
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess('profile'), data, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const update_profile = async (req: Request, res: Response) => {
    reqInfo(req)
    let user: any = req.header('user'),
        body: any = req.body
    try {
        if (body?.email) {
            if (await userModel.findOne({ email: body?.email, isActive: true, _id: { $ne: ObjectId(user?._id) } }, { isActive: true }))
                return res.status(409).json(new apiResponse(409, 'Email address already exist, please try another one', {}, {}))
        }
        if (body?.username) {
            if (await userModel.findOne({ username: body?.username, isActive: true, _id: { $ne: ObjectId(user?._id) } }, { isActive: true }))
                return res.status(409).json(new apiResponse(409, 'userName already exist, please try another one', {}, {}))
        }
        let response = await userModel.findOneAndUpdate({ _id: ObjectId(user._id), isActive: true }, body, { new: true })
        if (body?.image != response?.image && response.image != null && body?.image != null && body?.image != undefined) {
            // let [folder_name, image_name] = await URL_decode(response?.image)
            // await deleteImage(image_name, folder_name)
        }
        if (response) {
            return res.status(200).json(new apiResponse(200, 'Your profile has been updated', response, {}))
        }
        else return res.status(501).json(new apiResponse(501, 'User profile update database error', {}, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, 'Internal Server Error', {}, {}))
    }
}

export const change_password = async (req: Request, res: Response) => {
    reqInfo(req)
    let user: any = req.header('user'), { oldPassword, newPassword } = req.body, otp: number = 0
    try {
        for (let flag = 0; flag < 1;) {
            otp = await Math.round(Math.random() * 1000000)
            if (otp.toString().length == 6) {
                flag++
            }
        }
        let data = await userModel.findOne({ _id: ObjectId(user?._id), isActive: true, isBlock: false })
        const passwordIsCorrect = await bcryptjs.compare(oldPassword, data.password)
        if (!passwordIsCorrect) return res.status(400).json(new apiResponse(400, responseMessage?.invalidOldPassword, {}, {}))
        const hashPassword = await bcryptjs.hash(newPassword, await bcryptjs.genSaltSync(8))
        await userModel.updateOne({ _id: ObjectId(user?._id), isActive: true, isBlock: false }, { password: hashPassword, authToken: otp })
        return res.status(200).json(new apiResponse(200, responseMessage?.passwordChangeSuccess, {}, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const logout = async (req: Request, res: Response) => {
    reqInfo(req)
    let user: any = req.header('user')
    try {
        await userModel.updateOne({ _id: ObjectId(user._id), isActive: true }, { $pull: { deviceToken: req.body.logout } })
        return res.status(200).json(new apiResponse(200, 'Your account has been successfully logout', {}, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, 'Internal Server Error', {}, {}))
    }
}

export const switchAccount = async (req: Request, res: Response) => {
    reqInfo(req)
    let user: any = req.header('user')
    try {
        if (user.userType == 0) {
            // if (user.switchToUser == false) {
                await userModel.findOneAndUpdate({ _id: ObjectId(user._id), isActive: true }, { userType: 1 })
                return res.status(200).json(new apiResponse(200, 'Your account has been switched to user', {}, {}))
            // } else {
            //     await userModel.findOneAndUpdate({ _id: ObjectId(user._id), isActive: true }, { switchToUser: false })
            //     return res.status(200).json(new apiResponse(200, 'Your account has been switched to chef', {}, {}))
            // }
        }
        if (user.userType == 1) {
            // if (user.switchToChef == false) {
                await userModel.findOneAndUpdate({ _id: ObjectId(user._id), isActive: true }, { userType: 0 })
                return res.status(200).json(new apiResponse(200, 'Your account has been switched to chef', {}, {}))
            // } else {
            //     await userModel.findOneAndUpdate({ _id: ObjectId(user._id), isActive: true }, { switchToChef: false })
            //     return res.status(200).json(new apiResponse(200, 'Your account has been switched to user', {}, {}))
            // }
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, 'Internal Server Error', {}, {}))
    }
}

export const google_SL = async (req: Request, res: Response) => {
    let { accessToken, idToken, deviceToken } = req.body
    reqInfo(req)
    try {
        if (accessToken && idToken) {
            let verificationAPI = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`,
                idAPI = `https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`;

            let access_token: any = await axios.get(verificationAPI)
                .then((result) => {
                    return result.data
                }).catch((error) => {
                    return false;
                })
            let id_token: any = await axios.get(idAPI)
                .then((result) => {
                    return result.data
                }).catch((error) => {
                    return false
                })
            if (access_token.email == id_token.email && access_token.verified_email == true) {
                const isUser = await userModel.findOneAndUpdate({ email: id_token?.email, isActive: true }, { $addToSet: { deviceToken: deviceToken } })
                if (!isUser) {
                    for (let flag = 0; flag < 1;) {
                        var authToken = await Math.round(Math.random() * 1000000)
                        if (authToken.toString().length == 6) {
                            flag++
                        }
                    }
                    let username = id_token.email.split('@')[0]
                    
                    return new userModel({
                        email: id_token.email,
                        firstName: id_token.given_name,
                        lastName: id_token.family_name,
                        image: id_token.picture,
                        loginType: 1,
                        isEmailVerified: true,
                        deviceToken: [deviceToken],
                        username: username,
                        authToken,
                    }).save()
                        .then(async (response :any) => {
                            const token = jwt.sign({
                                _id: response._id,
                                authToken: response.authToken,
                                type: response.userType,
                                status: "OTP verification",
                                generatedOn: (new Date().getTime())
                            }, jwt_token_secret)
                            let return_response = {
                                userType: response?.userType,
                                isEmailVerified: response?.isEmailVerified,
                                loginType: response?.loginType,
                                _id: response?._id,
                                firstName: response?.firstName,
                                lastName: response?.lastName,
                                email: response?.email,
                                image: id_token?.picture,
                                username: response?.username,
                                token,
                            }
                            return res.status(200).json(new apiResponse(200, responseMessage?.loginSuccess, return_response, {}));
                        })
                } else {
                    if (isUser?.isBlock == true) return res.status(401).json(new apiResponse(401, responseMessage?.accountBlock, {}, {}));
                    const token = jwt.sign({
                        _id: isUser._id,
                        authToken: isUser.authToken,
                        type: isUser.userType,
                        status: "OTP verification",
                        generatedOn: (new Date().getTime())
                    }, jwt_token_secret)
                    const refresh_token = jwt.sign({
                        _id: isUser._id,
                        generatedOn: (new Date().getTime())
                    }, refresh_jwt_token_secret)
                    let response = {
                        userType: isUser?.userType,
                        isEmailVerified: isUser?.isEmailVerified,
                        loginType: isUser?.loginType,
                        _id: isUser?._id,
                        firstName: isUser?.firstName,
                        lastName: isUser?.lastName,
                        email: isUser?.email,
                        image: isUser?.image,
                        username: isUser?.username,
                        token,
                refresh_token

                    }
                    return res.status(200).json(new apiResponse(200, responseMessage?.loginSuccess, response, {}));
                }
            }
            return res.status(401).json(new apiResponse(401, responseMessage?.invalidIdTokenAndAccessToken, {}, {}))
        }
    } catch (error) {
        console.log(error);

        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, error, {}));
    }
}