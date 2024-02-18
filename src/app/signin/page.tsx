"use client"

import { InputBox } from "../[component]/input-box"
import { FormButton } from "../[component]/form-btn"
import Link from "next/link"
import { FormEvent, useState } from "react"
function Signin(){

    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [emailErrorMsg,setEmailErrorMsg]=useState("")
    const [passwordErrorMsg,setPasswordErrorMsg]=useState("")

    function handleFormSubmission(e:FormEvent){
        e.preventDefault()
    }
    return(
        <main className="flex justify-center min-h-screen items-center bg-white">
            <div className="rounded p-4 bg-gray-100 max-w-sm">
                <h1 className="text-center text-xl">Signin</h1>
                <form onSubmit={handleFormSubmission}> 
                    <div className="py-2">
                        <InputBox label="Email" setValue={setEmail} errorMsg={emailErrorMsg} value={email} setErrorMsg={setEmailErrorMsg} />
                        <div className="py-2"></div>
                        <InputBox label="Password" setValue={setPassword} errorMsg={passwordErrorMsg} value={password} setErrorMsg={setPasswordErrorMsg} />
                    </div>
                    <div className="py-2"></div>
                    <FormButton label="Signin"/>
                </form>
                <div className="text-center py-2">
                    <span>OR</span>
                </div>
                <div></div>
                <div className="text-center">
                    <p>Don't have an account? 
                        <Link href={'/signup'}> Signup</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Signin