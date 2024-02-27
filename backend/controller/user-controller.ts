import { NextFunction,Request,Response } from "express"
import AppError from "../helpers/app-error"
import userService from "../services/user-service"
import BaseController from './base-controller'

class UserController extends BaseController {
    async createFolder(req:Request,res:Response,next:NextFunction){
        let {folderName,location,parentFolderId} = req.body
        if(!parentFolderId) parentFolderId = ""
        if(!folderName || !location) return res.status(400).json({message:"Folder name or location or parent folder id is required"})
        const user = "naren@gmail.com"
    // here replace the user with actual user retrieved from the req.decodedToken 
        try{
            await userService.createFolder(user,folderName,location,parentFolderId)
            return res.status(200).json({
                message:"folder created successfully"
            })
        }
        catch(err){
            console.error("Error creating folder:",err)
            return next(new AppError(this.internalServerErrorMessage,500))
        }
    }
    async uploadFile(req:Request,res:Response,next:NextFunction){
        const {user,bucketPath} = req.body
        const file = req.file
        if(!file){
            return res.status(400).send("No file uploaded")
        }
        try{
            await userService.uploadFile(bucketPath,file.originalname,file.buffer)
            return res.status(200).send("File uploaded successfully")
        }
        catch(err){
            console.error("Error uploading file:",err)
            return next(new AppError(this.internalServerErrorMessage,500))
        }
    }
    async getFilesAndFolders(req:Request,res:Response,next:NextFunction){
        let {folderId} = req.query as {folderId:string}
        const user = "naren@gmail.com"
        if(!folderId) folderId = ""
        try{
            const result = await userService.getFolderAndFileList(folderId,user)
            return res.status(200).json(result)
        }
        catch(err){
            console.error("Error fetching files and folders:",err)
            return next(new AppError(this.internalServerErrorMessage,500))
        }
    }
    async moveFilesAndFoldersToTrash(req:Request,res:Response,next:NextFunction){
        let {folderId} = req.body
        if(!folderId) return res.status(400).send("FolderId is required")
        try{
            const user = "naren@gmail.com"
            await userService.moveFilesAndFoldersToTrash(folderId,user)
            return res.status(200).json({message:"Delete succeed"})
        }
        catch(err){
            console.error("Error deleting files and folders:",err)
            return next(new AppError(this.internalServerErrorMessage,500))
        }
    }
    async getTrashedFilesAndFolders(req:Request,res:Response,next:NextFunction){
        const user = "naren@gmail.com"
        try{
            const trashedFilesAndFolders = await userService.getTrashedFilesAndFolders(user)
            return res.status(200).json(trashedFilesAndFolders)
        }
        catch(err){
            console.error("Error fetching trashed files and folders:",err)
            return next(new AppError(this.internalServerErrorMessage,500))
        }
    }
    async restoreFilesAndFolders(req:Request,res:Response,next:NextFunction){
        const user = "naren@gmail.com"
        const {folderId}=req.body
        if(!folderId) return res.status(400).json({message:"Folder id required"})
        try{
            await userService.restoreFilesAndFolders(folderId,user)
            return res.status(200).json({message:"Restored succeed"})
        }
        catch(error){
            console.error("Error restoring files and folders",error)
            return next(new AppError(this.internalServerErrorMessage,500))
        }
    }
    async deleteFilesAndFolders(req:Request,res:Response,next:NextFunction){
        const user = "naren@gmail.com"
        const {folderId} = req.body
        if(!folderId) return res.status(400).json({message:"Folder id required"})
        try{
            await userService.deleteFilesAndFolders(folderId,user)
            return res.status(200).json({message:"Permanently delete succeed"})
        }
        catch(error){
            console.error("Error deleting files and folders permanently",error)
            return next(new AppError(this.internalServerErrorMessage,500))
        }
    }
}


export default new UserController()