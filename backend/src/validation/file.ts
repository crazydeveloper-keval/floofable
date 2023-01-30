"use strict"
import { apiResponse, image_folder } from '../common'
import { Request, Response } from 'express'

export const file_type = async (req: Request, res: Response, next: any) => {
    if (!image_folder.includes(req.params.file)) return res.status(400).json(new apiResponse(400, 'Invalid File Type', { action: image_folder }, {}))
    next()
}