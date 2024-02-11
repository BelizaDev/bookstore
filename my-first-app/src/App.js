import './App.css';
import Button from './component/button/button';
import {data} from './data';
import Hero from './component/hero/Hero';
import Nav from './component/nav/nav';

import Home from './component/home/Home';
import {Routes, Route} from 'react-router-dom';
import ProductsListItem from './component/products/ProductsListItem';
import Products from './component/products/Products';
import { useState, useEffect } from 'react';
import AddProduct from './component/add-product/AddProduct';


function App(props) {

  const getProduct = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProduct(data))
  }

  useEffect(() => {
    getProduct()
  })

  
 
  const [product, setProduct] = useState([])

const handleAddProduct= () => {
  setProduct(data)
}
  return (
    <div className="App">
        <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Products btnText="View Product" productData = {product} handleAddProduct={handleAddProduct}/>}/>      
        <Route path='/addproduct' element={<AddProduct />}/>
      </Routes>
      
    
      {/* <Hero btnText="Add Product" productData = {product}/> */}
      {/* <Products btnText="View Product" productData = {data}/>
      <Home /> */}
    </div>
  );
}

export default App;
