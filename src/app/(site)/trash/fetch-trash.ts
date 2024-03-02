

export const fetchTrash = async(user:any)=>{
    try{
        const response = await fetch("http://127.0.0.1:5000/api/v1/user/trash",{cache:"no-cache"})
        if(response.status==200){
            const data = await response.json()
            return data
        }
        return []
    }
    catch(err){
        console.error("Error fetching trash:",err)
        return []
    }
}