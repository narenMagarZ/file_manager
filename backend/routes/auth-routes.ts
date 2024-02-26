import express from 'express'
import authController from '../controller/auth-controller'
import authValidator from '../middleware/auth-validator'

export const authRouter = express.Router()

authRouter.post('/login',authValidator.validate,authController.login.bind(authController))
authRouter.post('/register',authValidator.validate,authController.register.bind(authController))