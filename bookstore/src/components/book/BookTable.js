import React from 'react';
import { useContext, useEffect, useState} from 'react';
import {BookContext} from '../../context';
import styled from 'styled-components';
import './booktable.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function BookTable() {

    const {book, setBook} = useContext(BookContext);
    const navigate = useNavigate();
    // const {_id} = useParams()
    const [err, setErr] = useState('');
    const [filtered, setFiltered] = useState(book)
console.log(book, 'book')

    const handleSearch = (event) => {
        setFiltered(book.filter(f => f.name.includes(event.target.value)))
   
    }
    
   const handleDelete = async (id) => {
    try{
        axios.delete('http://localhost:8080/api/book/' + id)
        .then((response) => {
        //    console.log(response, id);
            setBook(book.filter(value => value._id !== id))
        })
    }
    catch(err){
        setErr('Delete failed', err)
    }
    
   }


  return (

    <div className='container'>
    
            <h3 className='vb-title'>List of Books</h3>
            {/* <input placeholder='search'className="input-search" name='' onChange={handleSearch}/> */}
            <table className='table table-striped'>
                <thead>
                    <tr className="tr-book">
                        <th scope="col">Book Title</th>
                        <th scope="col">Book Author</th>
                        <th scope="col">Book Price</th>
                        <th scope="col">Book ISBN</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody className="body-book">
                   {book.map((bookItem) => {
                    return (
                        <tr className="tr-book">
                            <td className="book-title">{bookItem.title}</td>
                            <td>{bookItem.author}</td>
                            <td>${bookItem.price}</td>
                            <td>{bookItem.ISBN}</td>
                            <td>
                               
                                <Link to={`/update/${bookItem._id}`} className="update-link">Update</Link>&nbsp;&nbsp;
                                {/* <Link onClick={(e) => {
    const url = `http://localhost:8080/api/book/${_id}`;
    fetch(url, {method: 'DELETE',
headers:{
    'Content-Type':'application/json',
}}).then((response) => {
        if(!response.ok){
            throw new Error('Something went wrong')
        }
        navigate('/')
       
    })
    .catch((e) => console.log(e))
}}>Delete</Link> */}

                                {/* <button onClick={() => handleDelete(bookItem._id)}>Delete</button> */}
                                <Link onClick={() => handleDelete(bookItem._id)} className="delete-link">Delete</Link>
                            
                            </td>
                        </tr>
                    )
                   })}
                </tbody>
            </table>
        {/* </div> */}
    </div>


//     <div>
//                {book.map((bookItem) => {
//           return(

//             <div>
//           <div key={bookItem._id}></div>
// <table>
//     <tr>
//         <th>Book Title</th>
//         <th>Book Price</th>
//     </tr>
//     <tr>
//         <td>{bookItem.title}</td>
//         <td>${bookItem.price}</td>
//     </tr>
// </table>
//            {/* <p>{bookItem.title}</p> 
//            <p>${bookItem.price}</p> */}
//           {/* {book? <StyledButton>View</StyledButton>:null} */}
//            </div>
//        ) })} 
//     </div>
  )
}

export default BookTable