/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. 
Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { fetchBooks } from "../API";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"

export default function Books() {

    const navigate = useNavigate();

    const [catalog, setCatalog] = useState([]);

    
   

    useEffect(() => {
        async function fetchData() {
            setCatalog( await fetchBooks())
           console.log('catalog', catalog)
        }
        fetchData();
    }, []);
    

   
    
    return (
        <>
        
         {
             catalog.map((book) => {
                 return(
                     <div className="book">
                    {book.title}
                  <img src={book.coverimage} alt="" />
                   <form onSubmit={(e) => {
                       e.preventDefault()

                       navigate(`/book/${book.id}`)
                     
                 
                    }}>  
                    <button type="submit">View Book</button>
                    </form>
                    
                    </div>
                )
                })
            }
        </>
    )
}






