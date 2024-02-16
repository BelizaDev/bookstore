import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useContext} from 'react';
import {BookContext} from '../../context';

function EditBook() {
    // const {book, setBook} = useContext(BookContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [bookedit, setbookedit] = useState({
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
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios(`http://localhost:8080/api/book/${id}`)
                console.log(response)
                setbookedit(response.data)
            }catch (error){
                console.log(error)
                
            }
        }
        fetchData()
    }, [])

    const handleChange = (event) => {
        const updatedField = { [event.target.name]: event.target.value}
        const editedBook = Object.assign(bookedit, updatedField)
        setbookedit(editedBook)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
            url:`http://localhost:8080/api/book/${id}`,
            method:'PUT',
            data:bookedit
        }).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect(() => {
        if(updated){
            return navigate('book/${id}')
        }
    })





  return (
    <div>
        <div>
            bookedit={bookedit}
            handleChange= {(e) => handleChange(e)}
            handleSubmit= {(e) => handleSubmit(e)}
            cancelPath={`/book/${id}`}
        </div>
    </div>
  )
}

export default EditBook