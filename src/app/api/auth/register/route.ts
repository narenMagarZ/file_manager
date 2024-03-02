import { NextResponse } from "next/server"


export async function POST(request:Request){
    try{
        const {email,password} = await request.json()
        // validate email and password
        fetch("http://127.0.0.1:5000/api/v1/auth/register",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email,password})
        }).then(res=>{
            
        }).catch(err=>{

        })
    }
    catch(err){
        console.error(err)
    }
    return NextResponse.json({message:"success"})
}