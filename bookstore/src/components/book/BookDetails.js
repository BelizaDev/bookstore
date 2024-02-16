import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './bookDetail.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NyBestSeller from '../NyBestSeller';

const StyledDiv = styled.div`
border-style:1px solid black;
align-items:center;
padding:7px;
`


function BookDetails() {
    const [bookSpecific, setBookSpecific] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const API_KEY = 'voBdV86J0MSLmAXydB0PgE9pynVT5j7t';

    // const backButton = () => {
    //     navigate("/viewBook")
    // }
    const backButton = () => {
           navigate("/nybestseller")
       }
   
 console.log(params)
    useEffect((id) => {
       
        // http://localhost:8080/api/book/65ba75e62eec8b2d5c1cbcd4

        // axios.get(`http://localhost:8080/api/book/${params.id}`)
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}' + id)
            .then(res => (setBookSpecific(res.data.results.books)))
            .catch(err => console.log(err))
    },[])
   
    console.log('bookspec', bookSpecific)
  return (
    <>
    <button className="btn-back" onClick={backButton}>Back</button>
   { bookSpecific? <div className='container'>
   
        {/* <h1>BookDetails</h1> */}

        <div className='detail-box'>
          <h1>{bookSpecific.rank}</h1>
        <img src={bookSpecific.book_image} />
        <div>
        <p>{bookSpecific.title}</p><br/>
        <p className='p-author'>by:{bookSpecific.author}</p><br/>
       
       <hr/>
        <p className='p-desc'>{bookSpecific.description}</p>

        
        </div>
      
        </div>

    </div>
:null}
    </>
  )
}

export default BookDetails


