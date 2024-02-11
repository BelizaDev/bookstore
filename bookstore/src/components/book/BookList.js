import React from 'react';
import { useContext, useEffect} from 'react';
import {BookContext} from '../../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
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
const StyledButton = styled.button`
background:orange;
outline:none;
border:none;
padding:5px;
margin:5px;
margin-left:20%;
color:#ffffff;
`

function BookList() {
    const {book, setBook} = useContext(BookContext)
    
  return (
    <StyledDiv>
      
        {book.map((bookItem) => {
          return(

            <div>
          <div key={bookItem._id}></div>
          <Link to={`/book/${bookItem._id}`}><StyledImg width="150px" height="150px" src={bookItem.imageUrl} alt='book'/></Link>

           <StyledPara>{bookItem.title}</StyledPara> 
           <StyledPara>${bookItem.price}</StyledPara>
          {book? <StyledButton>View</StyledButton>:null}
           </div>
       ) })}
    </StyledDiv>
  )
}

export default BookList