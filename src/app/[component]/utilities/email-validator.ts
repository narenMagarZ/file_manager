export default function emailValidator(email:string):string{
    if(!email)
        return "Email cannot be empty"
    else 
        return new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`).test(email) ? "" : "Email must be valid"
}