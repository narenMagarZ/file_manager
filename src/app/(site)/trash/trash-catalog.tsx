"use client"
import { useEffect, useState } from "react";
import TrashItem from "./trash-item";



export default function TrashCatalog(props:{trashes:{name:string,id:string}[]}){
    const trashLen = props.trashes?.length || 0
    const [isMenuOpen,setIsMenuOpen]=useState(new Array(trashLen).fill(false))
    const handleMenu = (i:number)=>{
        setIsMenuOpen((prev)=>{
            prev = prev.map((_,i)=>prev[i]=false)
            prev[i]=true
            return prev
        })
    }
    useEffect(()=>{
        const clickHandler = ()=>{
            setIsMenuOpen((prev)=>{
                prev = prev.map((_,i)=>prev[i]=false)
                return prev
            })
        }
        window.document.addEventListener("click",clickHandler)
        return()=>{
            window.document.removeEventListener("click",clickHandler)
        }
    },[isMenuOpen])
    return(
        <div className="inline-flex flex flex-wrap gap-2">
            {
                props.trashes?.map(({id,name},i)=>(
                    <TrashItem id={id} name={name} index={i} isMenuOpen={isMenuOpen[i]} handleMenu={handleMenu} />
                ))
            }
        </div>
    )
}