import React from 'react';
import styled from 'styled-components';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';


import {BookContext} from '../../context';

const StyledMain = styled.main`
background-image: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
`

const StyledDiv = styled.div`

background-image: linear-gradient( #e0e0e0, #f3f3f3);
box-shadow:0 8px 16px rgba(0,0,0,.3);
width:800px;
margin:25px auto;
padding-left:15px;
`
// const StyledForm = styled.form`
// padding-left:30px;
// align-items:center;
// text-align:center;
// margin-top:15px;
// `

const StyledForm = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
`
const StyledTitle = styled.h2`
  text-align: center;
  color: #333;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  `
// const StyledInput = styled.input`
// outline:none;
// border-radius:20px;
// width:300px;
// height:30px;
// font-size:15px;
// margin-left:10px;
// margin-bottom:10px;
// padding:10px;
// font-weight:500;
// `
const StyledLabel = styled.label`
margin-bottom:10px;
font-weight:500;
`

const StyledButton = styled.button`
width:110px;
  padding: 10px;
  background-color: #A44CD3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #8800C7;
  }
`;
// const StyledButton = styled.button`
//     width:90px;
//     height:30px;
//     background-color:grey;
//     border-radius:20px;
//     margin-bottom:10px;
//     margin-right:5px;
//     padding:10px;
//     font-size:1rem;
//     font-weight:500;
//     text-align: center;
//    text-direction:center;
//     cursor:pointer;
// `
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
           <StyledTitle>Add New Book</StyledTitle>
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>Book Title:</StyledLabel>
            <StyledInput name='title' value={book.title}  onChange={handleChange}/><br/>
            <StyledLabel>Book Author:</StyledLabel>
            <StyledInput name='author' value={book.author}  onChange={handleChange}/><br/>
            <StyledLabel>Book ISBN:</StyledLabel>
            <StyledInput name='ISBN' value={book.ISBN}  onChange={handleChange} /><br/>
            <StyledLabel>Book Pages:</StyledLabel>
            <StyledInput name='pages' value={book.pages} onChange={handleChange}  /><br/>
            <StyledLabel>Year Published</StyledLabel>
            <StyledInput name='publishedYear' value={book.publishedYear} onChange={handleChange} type='date' id='start' placeholder='2024/01/01'/><br />
            {/* <StyledLabel>Image Url:</StyledLabel>
            <StyledInput name='imageUrl' value={book.imageUrl} placeholder='Please enter the image url link of the book' onChange={handleChange}/><br/> */}
            <StyledLabel>Book Type</StyledLabel>
            <StyledSelect name='bookType' value={book.bookType} onChange={handleChange} id="booktype">
            <option value="fiction">Fiction</option>
            <option value="biography">Biography</option>
            <option value="kids">Kids</option>
            </StyledSelect><br/>
            <StyledButton value="Add Book" type='submit'>Save</StyledButton>&nbsp;&nbsp;
          <StyledButton type='reset'>Cancel</StyledButton>
        </StyledForm>
        </StyledDiv>
        </StyledMain>
  )
}

export default AddBook