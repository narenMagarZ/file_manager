import NextAuth from "next-auth";
import CredentialsProvder from 'next-auth/providers/credentials'
import {cookies} from 'next/headers'
const handler = NextAuth({
    session:{
        strategy:"jwt",
        maxAge:30 * 24 * 60 * 60
    },
    jwt :{
        maxAge:30 * 24 * 60 * 60
    },
    pages:{
        "signIn":"/signin"
    },
    providers:[
        CredentialsProvder({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials,req){
               try{
                const response = await fetch("http://127.0.0.1:5000/api/v1/auth/login",{
                        method:"POST",
                        headers:{
                            "content-type":"application/json"
                        },
                        body:JSON.stringify({email:credentials?.email,password:credentials?.password})
                })
                    const resCookie = response.headers.getSetCookie() 
                    const cookie = resCookie[0].split(';')[0].split('=')
                    if(cookie[0]=="access-token" && cookie[1]){
                        cookies().set('access-token',cookie[1],{
                            httpOnly:true
                        })
                    }
                    const result = await response.json()
                    console.log(result)
                    if(result && response.status === 200){
                        return {id:"1",email:"naren@gmail.com"}
                    }else return null
               }
               catch(err){
                    console.error(err)
                   return null
               }

            }
        })
    ]
})

export {handler as GET, handler as POST}