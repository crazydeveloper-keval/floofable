import express from 'express'
import {  userController, } from '../controllers'
import { userJWT } from '../helpers/jwt'
import { upload_image } from '../helpers/upload'
import * as validation from '../validation'
const router = express.Router()

router.post('/signup', validation?.signUp, userController.signUp)
router.post('/login', validation?.login, userController.login)
router.post('/forgot_password', validation?.forgot_password, userController.forgot_password)
router.post('/otp_verification', validation?.otp_verification, userController.otp_verification)
router.post('/reset_password', validation?.reset_password, userController.reset_password)

router.post('/product', validation.productValidation.add, userController.add_product)
router.get('/product',userController.get_product)
router.put('/product', validation.productValidation.update, userController.update_product)
router.get('/product/:id', validation.productValidation.by_id, userController.by_id_product)
router.delete('/product/:id', validation.productValidation.by_id, userController.delete_product)
router.post('/product/get', userController?.get_product_pagination)


router.post('/doctor', validation.doctorValidation.add, userController.add_doctor)
router.get('/doctor',userController.get_doctor)
router.put('/doctor', validation.doctorValidation.update, userController.update_doctor)
router.get('/doctor/:id', validation.doctorValidation.by_id, userController.by_id_doctor)
router.delete('/doctor/:id', validation.doctorValidation.by_id, userController.delete_doctor)
router.post('/doctor/get', userController?.get_doctor_pagination)


router.post('/order', validation.orderValidation.add, userController.add_order)
router.get('/order',userController.get_order)
router.put('/order', validation.orderValidation.update, userController.update_order)
router.post('/orderstatus',validation.orderValidation.statusupdate, userController.by_orderstatus)
router.get('/order/:id', validation.orderValidation.by_id, userController.by_id_order)
router.delete('/order/:id', validation.orderValidation.by_id, userController.delete_order)

router.post('/blog', validation.blogValidation.add, userController.add_blog)
router.get('/blog',userController.get_blog)
router.put('/blog', validation.blogValidation.update, userController.update_blog)
router.get('/blog/:id', validation.blogValidation.by_id, userController.by_id_blog)
router.delete('/blog/:id', validation.blogValidation.by_id, userController.delete_blog)

router.post('/image/:file',validation.fileValidation.file_type, upload_image.single('image') ,userController.error_upload, userController.upload)


export const userRouter = router