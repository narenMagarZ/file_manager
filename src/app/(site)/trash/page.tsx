import { fetchTrash } from "./fetch-trash"
import TrashCatalog from "./trash-catalog"
import { getServerSession } from "next-auth"

export default async function Trash(){
    const session = await getServerSession()
    const user = session?.user
    const trashData = fetchTrash(user?.email)
    const trash =  await Promise.all([trashData])
    console.log(trash[0])
    return(
        <main className="bg-white py-2">
            <TrashCatalog trashes={trash[0]}/>
        </main>
    )
}