import { useEffect, useState } from "react"

export default function SeeStock(){
    const[items,setitems] = useState([])
    async function getstock() {
        try{
            const response = await fetch('/api/see-stock',{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                credentials:'include',
                body: JSON.stringify({})
            }
            )
            const data = await response.json()
            if(data.msg == "user not logged"){
                console.log('user not logged')
            }
            else{
                setitems(data)
            }
        }catch(err){console.log(err,"erro")}


    }        useEffect(()=>{
            getstock()
        },[])

    return(
        <div>
            <h2>see stock</h2>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>
                        name:{item.name} - {item.quantity} by: ${item.value}
                    </li>
                ))}
            </ul>
        </div>
    )
}