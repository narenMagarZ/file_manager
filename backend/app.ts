import express from 'express'
import { router } from './routes'
import cors from 'cors'
export const app = express()

app.use(cors({
    origin:"http://localhost:3000",
    optionsSuccessStatus:200,
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',router)
