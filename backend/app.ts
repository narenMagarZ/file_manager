import express, { NextFunction,Request,Response } from 'express'
import { router } from './routes'
import cors from 'cors'
import AppError from './helpers/app-error'
export const app = express()

app.use(cors({
    origin:"http://localhost:3000",
    optionsSuccessStatus:200,
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/v1',router)
app.use((error:AppError,req:Request,res:Response,next:NextFunction)=>{
    return res.status(error.status).json({
        message:error.message
    })
})