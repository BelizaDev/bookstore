import React, {useState, useEffect, useContext} from 'react';
import './booktable.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from '../../context';

function UpdateBook() {
   const {setBook} = useContext(BookContext)
    const params = useParams();
    const navigate = useNavigate();
    const [isUpdatedFinished, setIsUpdateFinished] = useState(false)
    const [values, setValues] = useState({
        title:'',
        author:'',
        price:'',
        ISBN:''
    })
    // const {id} = useParams();
    useEffect(() => {
       
        axios.get(`http://localhost:8080/api/book/${params.id}`)
        .then(res => {
            setValues(currentValue => ({...currentValue,
                 title:res.data.title,author:res.data.author, 
                 price:res.data.price,ISBN:res.data.ISBN}))
        })
        .catch(err => console.log(err))
    }, [params.id])

    useEffect(() => {
        if(isUpdatedFinished){
            axios.get('http://localhost:8080/api/book')
            .then(res => setBook(res.data))
            .catch(err => console.error(err))
            navigate('/viewbook')
        }
    },[isUpdatedFinished, navigate, setBook])

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/book/${params.id}`, values)
        .then(res => {
            if(!res) return;
           setIsUpdateFinished(true)
        })       
        .catch(err => console.log(err))
    }
  return (
    
    <div className='container'>
        <div className="mt-3">
            <h3>List of Books</h3>
            <form onSubmit={handleSubmitUpdate}>
            <table className='table'>
                <thead>
                    <tr className="tr-book">
                        <th>Book Title</th>
                        <th>Book Author</th>
                        <th>Book Price</th>
                        <th>Book ISBN</th>
                    </tr>
                </thead>
                <tbody className="body-book">
                  
                        <tr className="tr-book">
                            <td className="book-title"><input name='title' value={values.title} onChange={e=> setValues({...values, title:e.target.value})}/></td>
                            <td><input name='author' value={values.author} onChange={e=> setValues({...values, author:e.target.value})}/></td>
                            <td><input name='price' value={values.price} onChange={e=> setValues({...values, price:e.target.value})}/></td>
                            <td><input name='ISBN' value={values.ISBN} onChange={e=> setValues({...values, ISBN:e.target.value})}/></td>
                            <td>
                                <button>Update</button>
                                {/* <Link to={`/update/${bookItem._id}`}>Update</Link> */}
                            </td>
                        </tr>
                   
                </tbody>
            </table>
            </form>
        </div>
    </div>














  )
}

export default UpdateBook