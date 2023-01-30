import multer from 'multer'
import uuid  from 'uuid';
import  multerS3 from 'multer-s3'
// const AWS = require('aws-sdk')
const config = require('config')


// const aws: any = config.get('aws')
// const s3 = new AWS.S3({
//     accessKeyId: aws.accessKeyId,
//     secretAccessKey: aws.secretAccessKey,
//     region: aws.region
// })
// const bucket_name = aws.bucket_name




export const upload_image = multer({
    
    storage:multer.diskStorage({

        destination: (req,file,cb) =>{
          cb(null,`uploads/${req.params.file}`)
         },
        filename:(req,file,cb)=>{
            const { originalname} = file;
            let date = Date.now().toString()
            req.body.location=`${req.params.file}_${date}.${originalname.split(".")[originalname.split(".")?.length - 1]}`
            cb(null,`${date}.${originalname.split(".")[originalname.split(".")?.length - 1]}`);
         }
        
    }),
    limits: {
        fileSize: 1024 * 1024 * 20        
      },
      fileFilter: (req, file, cb) => {
        if (
          file.mimetype === "image/jpg" ||
          file.mimetype === "image/jpeg" ||
          file.mimetype === "image/png"  
          // file.mimetype === "video/mp4"      file.mimetype === "video/mpeg" ||
    
        ) {
          cb(null, true);
        } else {
          cb(null, false);
        }
      }
});

// export const uploadS3 = multer({
//   storage: multerS3({
//       s3: s3,
      
//       acl: 'bucket-owner-read',
//       bucket: function (req: any, file, cb) {
//         cb(null, `${bucket_name}/upload/${req.params.file}`);
//       },
//       // contentType: multerS3.AUTO_CONTENT_TYPE,
//       metadata: function (req: any, file, cb) {
//           cb(null, { fieldName: file.fieldname });
//       },
//       // destination: (req,file,cb) =>{
//       //   cb(null,)
//       //  },
//       key: function (req: any, file, cb) {
//           // logger.info('file successfully upload')
//           const { originalname} = file;
//           const file_type = file.originalname.split('.')
//           let date = Date.now().toString()
//           req.body.size = parseInt(req.headers['content-length']) / 1048576
//           req.body.location = `${req.params.file}_${date}.${originalname.split(".")[originalname.split(".")?.length - 1]}`
//           cb(null, `${date}.${originalname.split(".")[originalname.split(".")?.length - 1]}`);
//       },
//   }),
// });