import { useState, useEffect } from "react";

const apiUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";


export default function AccountInfo({token}) {
    console.log(token)
   
    const [data, setData] = useState()
    
    useEffect(() =>{

       async function getData() {

            
            try {
                const response = await fetch(`${apiUrl}/users/me`, {
                    headers: {
                        
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                })
                const result = await response.json()
                console.log(token)
                setData(result)
                console.log(result);
                return result;
            } catch (error) {
                console.log(error)
            }
        }
        getData();
},[])
    return (
        <>{
            data ? <>
                     <div>{data.id}</div>
                     <div>{data.firstname}</div>
                   </>
                
            : <div>loding...</div>
        }
   
        </>
)

}