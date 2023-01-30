"use strict"
import nodemailer from 'nodemailer'
import config from 'config'
import moment from 'moment-timezone'
import fs from 'fs'
import handlebars from 'handlebars'

const mail: any = config.get('nodeMail')

const option: any = {
    host: 'smtp.gmail.com',
    port: 465,
    // port: 587,
    tls: {
        rejectUnauthorized: false
        //     ciphers: 'SSLv3'
    },
    // secureConnection: true,
    auth: {
        user: mail.mail,
        pass: mail.password,
    },
}
const transPorter = nodemailer.createTransport(option)

export const otp_verification_mail = async (mail_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const mailOptions = {
                from: `PrivateChef <${mail.mail}>`,
                to: mail_data?.email,
                subject: "2 Step otp verification",
                html: `<html lang="en-US">
                <head>
                    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                    <title>Reset Password Email Template</title>
                    <meta name="description" content="Reset Password Email Template.">
                    <style type="text/css">
                        a:hover {text-decoration: underline !important;}
                    </style>
                </head>
                <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
                    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                        <tr>
                            <td>
                                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="height:80px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="height:20px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                                <tr>
                                                    <td style="height:40px;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0 35px;">
                                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">PrivateChef otp verification</h1>
                                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                            Hi ${mail_data.firstName} ${mail_data?.lastName}
                                                            <br>
                                                            Someone, hopefully you, has attempted login
                                                            PrivateChef account.
                                                            <br>
                                                            OTP will expire in 10 minutes.
                                                            <br>
                                                            Verification code: ${mail_data.otp}
                                                            <br>
                                                            <br>
                                                            Thanks,
                                                            <br>
                                                            PrivateChef
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="height:40px;">&nbsp;</td>
                                                </tr>
                                            </table>
                                        </td>
                                        <tr>
                                            <td style="height:20px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="height:80px;">&nbsp;</td>
                                        </tr>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>`,
            }
            transPorter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(`Email has been sent to ${mail_data?.email}, kindly follow the instructions`)
                }
            })
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

export const forgot_password_mail = async (mail_data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const mailOptions = {
                from: `PrivateChef <${mail.mail}>`,
                to: mail_data?.email,
                subject: "Forgot password",
                html: `<html lang="en-US">
                <head>
                    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                    <title>Reset Password Email Template</title>
                    <meta name="description" content="Reset Password Email Template.">
                    <style type="text/css">
                        a:hover {text-decoration: underline !important;}
                    </style>
                </head>
                <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
                    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                        <tr>
                            <td>
                                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="height:80px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="height:20px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                                <tr>
                                                    <td style="height:40px;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0 35px;">
                                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">PrivateChef forgot password</h1>
                                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                            Hi ${mail_data.firstName} ${mail_data?.lastName}
                                                            <br>
                                                            Someone, hopefully you, has attempted forgot password request.
                                                            <br>
                                                            OTP will expire in 10 minutes.
                                                            <br>
                                                            Verification code: ${mail_data.otp}
                                                            <br>
                                                            <br>
                                                            Thanks,
                                                            <br>
                                                            PrivateChef
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="height:40px;">&nbsp;</td>
                                                </tr>
                                            </table>
                                        </td>
                                        <tr>
                                            <td style="height:20px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="height:80px;">&nbsp;</td>
                                        </tr>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>`,
            }
            transPorter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(`Email has been sent to ${mail_data?.email}, kindly follow the instructions`)
                }
            })
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}