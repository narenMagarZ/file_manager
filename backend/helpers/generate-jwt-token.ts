import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const generateJwtToken = (email:string)=>{
    const payload = {userId:email}
    try{
        const token = jwt.sign(payload,process.env.SECRET_KEY??"",{expiresIn:'1h'})
        return token
    }
    catch(error:any){
        console.error("Error generating jwt:",error.message)
        return null
    }
}