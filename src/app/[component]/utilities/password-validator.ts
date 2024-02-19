export default function passwordValidator(password:string):string{
    if(!password)
        return "Password cannot be empty"
    else if(!new RegExp('^.{8,}$').test(password))
        return "Password must be 8 characters long"
    else if(!new RegExp('^(?=.*[A-Z]).+$').test(password))
        return "Password must contains at least one uppercase letter"
    else if(!new RegExp('^(?=.*\\d).+$').test(password))
        return "Password must contains at least one digit"
    else if(!new RegExp('^(?=.*[@$!%*?&]).+$').test(password))
        return "Password must contains at least one special character"
    else return ""    
}