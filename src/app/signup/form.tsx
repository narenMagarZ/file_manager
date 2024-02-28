"use client"
import {useState,FormEvent} from 'react'
import { InputBox } from '../[component]/input-box'
import { FormButton } from '../[component]/form-btn'
export default function Form(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [emailErrorMsg,setEmailErrorMsg]=useState("")
    const [passwordErrorMsg,setPasswordErrorMsg]=useState("")
    
    async function handleFormSubmission(e:FormEvent){
        e.preventDefault()
        if(!emailErrorMsg && !passwordErrorMsg && email && password){
            const response = await fetch(`/api/auth/register`,{
                method:"POST",
                body:JSON.stringify({email,password})
            })
        }
    }
    return(
        <form onSubmit={handleFormSubmission} className="py-2">
                    <div className="py-2">
                        <InputBox label="Email" value={email} setValue={setEmail} errorMsg={emailErrorMsg} setErrorMsg={setEmailErrorMsg}  />
                        <div className="py-2"></div>
                        <InputBox label="Password" value={password} setValue={setPassword} errorMsg={passwordErrorMsg} setErrorMsg={setPasswordErrorMsg} />
                    </div>
                    <div className="py-2"></div>
                    <FormButton label="Signup"/>
        </form>
    )
}