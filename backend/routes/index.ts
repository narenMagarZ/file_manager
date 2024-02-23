import express from 'express'
import { authRouter } from './auth-routes'
import { userRouter } from './user-routes'
export const router = express.Router()

router.use('/user',userRouter)
router.use('/auth',authRouter)
