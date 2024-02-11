import { useState, useEffect, createContext } from 'react';
import {bookData} from './data';
import axios from 'axios';

export const BookContext = createContext();

export const BookProvider = (props) => {
    // const [book, setBook] = useState(bookData);


    const [book, setBook] = useState([])
    useEffect(()=> {
      axios.get('http://localhost:8080/api/book/books')
          .then(res => (setBook(res.data)) )
          .catch(err => console.log(err))
    }, [])

const [isAuthenticated, setIsAuthenticated] = useState(false);

const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true)
}
const logout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
}

    return(
        <BookContext.Provider value={{book, setBook, isAuthenticated, login,logout}}>
            {props.children}
        </BookContext.Provider>
    )
}