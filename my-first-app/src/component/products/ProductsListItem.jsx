import Button from "../button/button"
import styled from "styled-components"


function ProductsListItem ({productData}) {
   
    return(
        <>
               
        {
            productData.map((product, index) => {
                return (
                    <>
<div key={index}>
                    <img width={100} height={100} src={product.image}/>
                    <h6>{product.title}</h6>
                    
                    <p>${product.price}</p>
                    
                    
                    
            </div>
                    </>
                )
            })
        }
        </>
    )
}

export default ProductsListItem