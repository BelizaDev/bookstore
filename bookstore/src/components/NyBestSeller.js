import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledDiv = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
width:100%; 
 
`
const StyledPara = styled.p`

font-size:0.8rem;
line-height:0.8rem;
margin-top:4px;


`
const StyledImg = styled.img`
box-shadow:0 8px 16px rgba(0,0,0,.3);
cursor:pointer;
margin-top:5px;
background-color:#EEEDEB;
`

const StyledButton = styled.button`
background:purple;
outline:none;
border:none;
font-size:15px;
margin-bottom:5px;

color:#ffffff;
cursor:pointer;
`
const StyledSection = styled.section`


 
  // flex-wrap:wrap;
`
function NyBestSeller() {
    const[nyBook, setNyBook] = useState([])
const API_KEY = 'voBdV86J0MSLmAXydB0PgE9pynVT5j7t';
  

useEffect(()=> {
    axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`)
        .then(res => (setNyBook(res.data.results.books)) )
        .catch(err => console.log(err))
  }, [])
   
    
console.log(nyBook, 'nybook')
  return (
    <>
    {/* <p>hello</p></> */}
    <StyledDiv>
 
{nyBook.map((bookny, index) => {
  return (
       <StyledSection>
           <div key={index}></div>
           {/* <Link to={`/nybestseller/${bookny.rank}`}><StyledImg src={bookny.book_image} width="110px" height="110px"/></Link> */}
           <StyledImg src={bookny.book_image} width="110px" height="110px"/>
            <StyledPara>{bookny.title}<br/>
            by:{bookny.author}</StyledPara>
            {/* {bookny?  <Link to={`/nybestseller/${index}`}><StyledButton>View</StyledButton></Link>:null} */}
         </StyledSection>
         
    )
    })}
  </StyledDiv> 
  </>
  )
}

export default NyBestSeller