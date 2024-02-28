import React from "react"
import emailValidator from "./utilities/email-validator"
import passwordValidator from "./utilities/password-validator"
interface inputboxProps{
    label:string
    errorMsg?:string
    value:string
    setValue:React.Dispatch<React.SetStateAction<string>>
    setErrorMsg:React.Dispatch<React.SetStateAction<string>>
}

export function InputBox(props:inputboxProps){
    return(
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input 
            id={props.label}
            type={props.label.toLowerCase()=="password"?"password":"text"}
            onChange={(e)=>{
                const inputValue = e.target.value
                props.setValue(()=>inputValue)
                if(props.label==='Email'){
                    const msg = emailValidator(inputValue)
                    props.setErrorMsg(msg)
                }else {
                    const msg = passwordValidator(inputValue)
                    props.setErrorMsg(msg)
                }
            }}
            value={props.value}
            className="border focus:ring-blue-500 focus:ring-2 focus:outline-none rounded border-gray-300 px-2 py-1" />
            <p className="text-red-500 text-sm">
                <span>{props.errorMsg}</span>
            </p>
        </div>
    )
}


