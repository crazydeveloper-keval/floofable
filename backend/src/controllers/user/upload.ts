"use strict"
import { reqInfo } from '../../helpers/winston_logger'
import { apiResponse } from '../../common'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
// const AWS = require('aws-sdk')
const config = require('config')


// const aws: any = config.get('aws')
// const s3 = new AWS.S3({
//     accessKeyId: aws.accessKeyId,
//     secretAccessKey: aws.secretAccessKey,
//     region: aws.region
// })
// const bucket_name = aws.bucket_name

export const error_upload = async (err:Error,req: Request, res: Response ,next) => {
    if (err) {
        return res.status(413).json({
            status: 413,
            message: err,
        })
      } else {
        next()
      }
}
export const upload = async (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: "Image Successfully Uploaded",
        // data: { image: file?.transforms[0]?.location }
        data: { image: req.body.location }
    })
}
export const upload1 = async (req: Request, res: Response) => {
    let extra = req.files as any
    // extra.push(req.body.location)
    return res.status(200).json({
        status: 200,
        message: "image successfully uploaded",
        // data: { image: file?.transforms[0]?.location }
        data: { image: extra.image ? "vehicle_"+extra?.image[0].filename :"",
            image1: extra.image1 ? "vehicle_"+extra?.image1[0].filename :"",
            image2: extra.image2 ? "vehicle_"+extra?.image2[0].filename :"",
            image3: extra.image3 ? "vehicle_"+extra?.image3[0].filename :""   }
    })
}
export const upload2 = async (req: Request, res: Response) => {
    let extra = req.files as any
    console.log(req.files,req.body.location)
    // extra.push(req.body.location)
    return res.status(200).json({
        status: 200,
        message: "image successfully uploaded",
        // data: { image: file?.transforms[0]?.location }
        data: { image: extra.image ? "vehicle_"+extra?.image[0].key :"",
            image1: extra.image1 ? "vehicle_"+extra?.image1[0].key :"",
            image2: extra.image2 ? "vehicle_"+extra?.image2[0].key :"",
            image3: extra.image3 ? "vehicle_"+extra?.image3[0].key :""   }
    })
}

export const stream_upload = async (req: Request, res: Response) => {
    const  filename  = req.params.file;
    const file_type = filename.split('_')
    const response = res.sendFile(`${file_type[1]}`, { root: `./uploads/${file_type[0]}` });
    return response
}
// const callload = async(i:any,j:any,res: Response) =>{
//     try {
//         const stream = await s3.getObject({
//               Bucket: i,//Bucket: process.env.AWS_S3_BUCKET_NAME+folderpath,
//               Key: j
//             }).createReadStream().on('error', async function(err) {
//                 console.log('READSTREAM error');
//                 console.log(err.code);
//                 return res.status(500).json(`Failed to get file: ${err.code}`);
//             })
//             // console.log(stream.error,"fghgfhgfhgfhfgh",stream)
//             return stream;


//     } catch (error) {
//         console.log(error);
//       return res.status(500).json(`Failed to get file: ${error}`);
//     }
// }
// export const stream_upload2 = async (req: Request, res: Response) => {
//     const  filename  = req.params.file;
//     const file_type = filename.split('_')
//     console.log(file_type)
//     // try{

//         const file = await callload(`${bucket_name}/upload/${file_type[0]}`,`${file_type[1]}`,res)
//         console.log(file)
//         file.pipe(res);

//     // let stream = await s3.getObject({
//     //   Bucket: `${bucket_name}/upload/${file_type[0]}`,//Bucket: process.env.AWS_S3_BUCKET_NAME+folderpath,
//     //   Key: `${file_type[1]}`
//     // }).createReadStream();

//     // const response = await s3.getObject({
//     //     Bucket: `${bucket_name}/upload/${file_type[0]}`,
//     //     Key: `${file_type[1]}`,
//     // });
//     // console.log(response.response)
//     // stream.pipe(res);
// //   } catch (error) {
// //         console.log(error);
// //         return res.status(500).json(`Failed to get file: ${error}`);
// //       }
//     // const response = res.sendFile(stream);
   
//   }