import styled from "styled-components";
import { useState } from "react";

const FormContainer = styled.section`
max-width:400px;
margin:4rem auto;
padding:20px;
border-radius:5px;
box-shadow:0px 0px 5px rgba(0,0,0,0.2);
`

const StyledLabel = styled.label`
display:block;
font-weight:bold;
margin-bottom:5px;

`
const FormGroup = styled.div`

margin-bottom:20px;
`

const StyledInput = styled.input`
padding:10px;
width:100%;
`

const AddProduct = () => {

    const [product, setProduct]= useState({
        name:"",
        description:"",
        price:"",
        image:null
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProduct({...product, [name]:value})

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('product', product)
        setProduct({
            name:"",
            image:null,
            price:"",
            description:""
        })
    }

    return (
        <>
        <FormContainer>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
        <FormGroup>
        <StyledLabel> <label htmlFor="name">Name</label></StyledLabel>
       <StyledInput type="text" name="name" id="name" value={product.name} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <StyledLabel><label htmlFor="description">Description</label></StyledLabel> 
        <StyledInput type="text" name="description" id="description" value={product.description} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <StyledLabel><label htmlFor="price">Price</label></StyledLabel> 
        <StyledInput type="text" name="price" id="price" value={product.price} onChange={handleChange}/>
        </FormGroup>
        
        <StyledLabel> <label htmlFor="image">Upload Image</label></StyledLabel>
        <StyledInput type="file" name="image" id="image"/>
        <button>Submit</button>
        
        </form>
        
        </FormContainer>
        {product && (
        <ul>
            <li>name:{product.name}</li>
            <li>description:{product.description}</li>
            <li>price:{product.price}</li>
        </ul>
)}
        </>
    )
}

export default AddProduct