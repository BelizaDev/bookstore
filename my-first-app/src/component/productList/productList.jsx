import ProductsListItem from "../products/ProductsListItem"
import styled from "styled-components"

const StyledProductList = styled.div`
display:flex;
flex-direction:column;
`

const StyledProductsListItem = styled.div`
display:flex;
width:100%;
gap:2rem;
`
const ProductList = (props) => {
    return(
        <StyledProductList>
            <h3>New Products</h3>
           
                <StyledProductsListItem>
                
            <ProductsListItem productData={props.productData} buttonText= {props.buttonText} />
            
            </StyledProductsListItem>
            
        </StyledProductList>
    )
}

export default ProductList