
import Link from "next/link"
import Form from "./form"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
async function Signin(){
    const session = await getServerSession()
    if(session)  redirect("/home")
    return(
        <main className="flex justify-center min-h-screen items-center bg-white">
            <div className="rounded p-4 bg-gray-100 max-w-sm">
                <h1 className="text-center text-xl">Signin</h1>
                <Form/>
                <div className="text-center">
                    <p>Don't have an account? 
                        <Link className="hover:text-blue-500" href={'/signup'}> Signup</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Signin