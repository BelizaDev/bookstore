import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin:20px;
  display:flex;
  gap:25px;
 
  

  
 
`
const StyledPara = styled.p`
text-align:center;
font-size:1.5rem;
background-color:#EEEDEB;
`
const StyledImg = styled.img`
box-shadow:0 8px 16px rgba(0,0,0,.3);
cursor:pointer;
`
const StyledSection = styled.section`

width:1200px;
  height:600px;
  flex-wrap:wrap;
`
function NyBestSeller() {
    const[nyBook, setNyBook] = useState([])
const API_KEY = 'voBdV86J0MSLmAXydB0PgE9pynVT5j7t';
  

useEffect(()=> {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=voBdV86J0MSLmAXydB0PgE9pynVT5j7t')
        .then(res => (setNyBook(res.data.results.books)) )
        .catch(err => console.log(err))
  }, [])
   
    
console.log(nyBook, 'nybook')
  return (
    <>
    {/* <p>hello</p></> */}
    <StyledDiv>
 
{nyBook.map((book) => {
  return (
       <StyledSection>
             <StyledImg src={book.book_image} width="150px" height="150px"/>
            <StyledPara>{book.title}</StyledPara>
            <StyledPara>by:{book.author}</StyledPara>
           
         </StyledSection>
    )
    })}
  </StyledDiv> 
  </>
  )
}

export default NyBestSeller