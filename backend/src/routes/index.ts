import { Request, Router, Response } from 'express'
import { userStatus } from '../common'
import { userController } from '../controllers'

import { userRouter } from './user'
const router = Router()
const accessControl = (req: Request, res: Response, next: any) => {
    req.headers.userType = userStatus[req.originalUrl.split('/')[1]]
    next()
}
router.get('/img/:file' , userController.stream_upload)
// router.get('/awsimg/:file' , userController.stream_upload2)
router.use('/user', accessControl, userRouter)


export { router }