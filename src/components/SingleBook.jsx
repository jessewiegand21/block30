/* TODO - add your code to create a functional React component that renders details for a single book. 
Fetch the book data from the provided API. 
You may consider conditionally rendering a 'Checkout' button for logged in users. */
import {useParams} from 'react-router-dom'; 
import { useState } from 'react';
import { fetchBookById } from '../API';
import { useEffect } from 'react';

export default function SingleBook() {
    let params = useParams()
   
    const [bookData, setBookData] = useState({});

    
   

    useEffect(() => {
        async function fetchData(id) {
            setBookData( await fetchBookById(id))
           console.log('book', bookData)
        }
        fetchData(params.id);
   
    }, []);
    return (

      bookData.book && <>
    
      

        <div className='singleBook'>

      <h1>{bookData.book.title}</h1>
      <img src={bookData.book.coverimage} alt="" />
      <h2>{bookData.book.author}</h2>

      <h3>{bookData.book.description}</h3>
      </div>
      

  
    
      </>
    )
}