import React from 'react';
import styled from 'styled-components';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';


import {BookContext} from '../../context';

const StyledMain = styled.main`
`
const StyledDiv = styled.div`

background-image: linear-gradient( #e0e0e0, #f3f3f3);
box-shadow:0 8px 16px rgba(0,0,0,.3);
width:800px;
margin:25px auto;
padding-left:15px;
`
const StyledForm = styled.form`
padding-left:30px;
align-items:center;
text-align:center;
margin-top:15px;
`
const StyledInput = styled.input`
outline:none;
border-radius:20px;
width:300px;
height:30px;
font-size:15px;
margin-left:10px;
margin-bottom:10px;
padding:10px;
font-weight:500;
`
const StyledLabel = styled.label`
margin-bottom:10px;
font-weight:500;
`
const StyledButton = styled.button`
    width:90px;
    height:30px;
    background-color:grey;
    border-radius:20px;
    margin-bottom:10px;
    margin-right:5px;
    padding:10px;
    font-size:1rem;
    font-weight:500;
    text-align: center;
   text-direction:center;
    cursor:pointer;
`
const StyledSelect = styled.select`
width:100px;
height:30px;
margin-bottom:10px;
`
function AddBook() {
  

  const [book, setBook] = useState(
    {
      title:"",
      author:"",
      ISBN:"",
      pages:"",
      price:"",
      description:"",
      imageUrl:"",
      publishedYear:"",
      bookType:""
    }
  )
  const handleChange = (event) => {
    setBook({...book, [event.target.name]:event.target.value})
  }
  console.log(book)

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8080/api/book/book', book)
    .then((response) => {
      alert("book is added")
      setBook({
      title:"",
      author:"",
      ISBN:"",
      pages:"",
      price:"",
      description:"",
      imageUrl:"",
      publishedYear:"",
      bookType:""
      })
      
    })
    .catch((err) => console.error("something went wrong. Please try again"))
  }

  
  

  return (
    <StyledMain>
          
           <StyledDiv>
           <h1>Add New Book</h1>
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>Book Title:</StyledLabel>
            <StyledInput name='title' value={book.title} onChange={handleChange}/><br/>
            <StyledLabel>Book Author:</StyledLabel>
            <StyledInput name='author' value={book.author} onChange={handleChange}/><br/>
            <StyledLabel>Book ISBN:</StyledLabel>
            <StyledInput name='ISBN' value={book.ISBN} onChange={handleChange} /><br/>
            <StyledLabel>Book Pages:</StyledLabel>
            <StyledInput name='pages' value={book.pages} onChange={handleChange} placeholder='please enter the book page number' /><br/>
            <StyledLabel>Year Published</StyledLabel>
            <StyledInput name='publishedYear' value={book.publishedYear} onChange={handleChange} type='date' id='start' placeholder='2024/01/01'/><br />
            <StyledLabel>Image Url:</StyledLabel>
            <StyledInput name='imageUrl' value={book.imageUrl} onChange={handleChange}/><br/>
            <StyledLabel>Book Type</StyledLabel>
            <StyledSelect name='bookType' value={book.bookType} onChange={handleChange} id="booktype">
            <option value="fiction">Fiction</option>
            <option value="biography">Biography</option>
            <option value="kids">Kids</option>
            </StyledSelect><br/>
            <StyledButton value="Add Book" type='submit'>Save</StyledButton>
          <StyledButton type='clear'>Cancel</StyledButton>
        </StyledForm>
        </StyledDiv>
        </StyledMain>
  )
}

export default AddBook