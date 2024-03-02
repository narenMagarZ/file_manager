import Menubar from "./[component]/menu-bar";
import Searchbar from "./[component]/search-bar";
import { getServerSession } from "next-auth";
export default async function RootLayout({
    children
}:{children:React.ReactNode}){
    const session = await getServerSession()
    console.log(session)
    return (
        <html>
            <body 
            className="bg-white relative">
                <main className="bg-white flex flex-row min-h-screen">
                    <Menubar/>
                    <div className="p-2 w-full">
                        <div>
                            <Searchbar/>
                        </div>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}