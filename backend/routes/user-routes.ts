import express from 'express'
import userController from '../controller/user-controller'
import { upload } from '../file-upload-handler'

export const userRouter = express.Router()


userRouter.get('/files-and-folders',userController.getFilesAndFolders)
userRouter.post("/createfolder",userController.createFolder)
userRouter.post('/uploadfile',upload.single('file'),userController.uploadFile)
userRouter.post("/geturl",userController.downloadFile)
