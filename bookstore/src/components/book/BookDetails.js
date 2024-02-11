import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './bookDetail.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
border-style:1px solid black;
align-items:center;
padding:7px;
`


function BookDetails() {
    const [bookSpecific, setBookSpecific] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const backButton = () => {
        navigate("/viewBook")
    }
   
 console.log(params)
    useEffect(() => {
       
        // http://localhost:8080/api/book/65ba75e62eec8b2d5c1cbcd4
        axios.get(`http://localhost:8080/api/book/${params.id}`)
            .then(res => (setBookSpecific(res.data)))
            .catch(err => console.log(err))
    },[])
   
    console.log('bookspec', bookSpecific)
  return (
    <>
    <button className="btn-back" onClick={backButton}>Back</button>
    <div className='container'>
   
        {/* <h1>BookDetails</h1> */}
        <div className='detail-box'>
        <img src={bookSpecific.imageUrl} />
        <div>
        <p>{bookSpecific.title}</p><br/>
        <p className='p-author'>by:{bookSpecific.author}</p><br/>
       
       <hr/>
        <p className='p-desc'>{bookSpecific.description}</p>

        
        </div>
      
        </div>

    </div>
    </>
  )
}

export default BookDetails


