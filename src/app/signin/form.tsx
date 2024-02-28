"use client"
import {useState,FormEvent} from 'react'
import { InputBox } from '../[component]/input-box'
import { FormButton } from '../[component]/form-btn'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function Form(){
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [emailErrorMsg,setEmailErrorMsg]=useState("")
    const [passwordErrorMsg,setPasswordErrorMsg]=useState("")

    async function handleFormSubmission(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(!emailErrorMsg && !passwordErrorMsg && email && password){
            const response = await signIn('credentials',{
                email,
                password,
                redirect:false
            })
            console.log(response)
            if(!response?.error){
                router.push('/home')
                router.refresh()
            }
        }
        
    }
    return(
        <form 
        className="py-2"
        onSubmit={handleFormSubmission}> 
            <div className="py-2">
                <InputBox label="Email" setValue={setEmail} errorMsg={emailErrorMsg} value={email} setErrorMsg={setEmailErrorMsg} />
                <div className="py-2"></div>
                <InputBox label="Password" setValue={setPassword} errorMsg={passwordErrorMsg} value={password} setErrorMsg={setPasswordErrorMsg} />
            </div>
            <div className="py-2"></div>
            <FormButton label="Signin"/>
        </form>
    )
}