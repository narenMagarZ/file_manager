import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { MdOutlineRestore } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface trashItemProps {
    id:string
    name:string
    isMenuOpen:boolean
    index:number
    handleMenu:(id:number)=>void
}
export default function TrashItem(props:trashItemProps){
    async function handleRestore(){
        try{
            const response = await fetch("http://127.0.0.1:5000/api/v1/user/restore",{
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify({folderId:props.id})
            })
            if(response.status==200){
                // 
            }
        }
        catch(error){
            console.error("Error restoring:",error)
        }
    }
    async function handleDelete(){
        try{
            const response = await fetch("http://127.0.0.1:5000/api/v1/user/files-and-folders",{
                method:"DELETE",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify({folderId:props.id})
            })
            if(response.status==200){
                // 
            }
        }
        catch(error){
            console.error("Error restoring:",error)
        }
    }
    return(
        <div className="rounded-md p-2 bg-gray-100 text-sm text-gray-800 w-[200px]">
            <div className="inline-flex items-center justify-between w-full">
                <div className="inline-flex items-center gap-x-2">
                    <FaFolder/>
                    <span>{props.name}</span>
                </div>
                <div className="relative">
                    <button
                    onClick={()=>props.handleMenu(props.index)}
                    className="hover:bg-gray-200 rounded-full p-1"><BsThreeDotsVertical size={14} />
                    </button>
                    {
                        props.isMenuOpen ? <MenuBox handleDelete={handleDelete} handleRestore={handleRestore} /> : ""
                    }
                    
                </div>
            </div>
        </div>
    )
}

function MenuBox(props:{handleRestore:()=>void,handleDelete:()=>void}){
    return(
        <div className="z-50 flex flex-col gap-y-1 p-2 bg-white text-xs left-0 absolute rounded-md bg-white border">
            <button 
            onClick={props.handleRestore}
            className="text-center inline-flex items-center gap-x-2 hover:bg-gray-200 rounded-md px-2 py-1">
                <MdOutlineRestore/>
                Restore
            </button>
            <button 
            onClick={props.handleDelete}
            className="text-center hover:bg-gray-200 rounded-md px-2 py-1 inline-flex items-center gap-x-2">
                <MdDelete/>
                Delete</button>
        </div>
    )
}