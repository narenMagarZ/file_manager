import {NextFunction, Request,Response} from 'express'
import userService from '../services/user-service'
import AppError from '../helpers/app-error'
import { generateJwtToken } from '../helpers/generate-jwt-token'
import BaseController from './base-controller'

class AuthController extends BaseController {
    cookieOption = {}
    constructor(){
        super()
        this.cookieOption = {
            httpOnly:true, // prevent client-side access
            // secure:true, // use only in production with https,
            maxAge: 1800000 // 30 min(in milliseconds)
        }
    }
    async login(req:Request,res:Response,next:NextFunction){
        const {email,password}= req.body
        if(!email || !password) {
            return res.status(400).json({message:"Email or password required"})
        }
        try{
            const isUser = await userService.findUserWithEmailAndPassword(email,password)
            if(isUser){
                const token = generateJwtToken(email)
                if(!token){
                    return res.status(500).json({message:this.internalServerErrorMessage})
                }
                res.cookie("access-token",token,this.cookieOption)
                return res.status(200).json({message:"Login succeed"})
            }else{
                return res.status(401).json({message:"Invalid email or password"})
            }
        }catch(err){
            console.error("Error logging in user:",err)
            return next(new AppError(this.internalServerErrorMessage,500))
        }

    }
    async register(req:Request,res:Response,next:NextFunction){
        const {email,password} = req.body
        if(!email || !password) return res.status(400).json({message:"Email or password required"})
        try{
            const user = await userService.createUser(email,password)
            if(user){
                // create a jwt token to signup the user
                const token = generateJwtToken(email)
                if(!token){
                    return res.status(500).json({message:this.internalServerErrorMessage})
                }
                res.cookie("access-token",token,this.cookieOption)
                return res.status(200).json({message:"Register succeed"})
            }else{
                return res.status(400).json({message:"Failed to register"})
            }
        }
        catch(err){
            console.error("Error registering user:",err)
            return next(new AppError(this.internalServerErrorMessage,500))
        }
    }
}
export default new AuthController()