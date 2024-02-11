
import Hero from "../hero/Hero"
import ProductList from "../productList/productList"
import ProductsListItem from "./ProductsListItem"


const Products = (props) => {
    return(
        <>
            <Hero btnText = {props.btnText} productData={props.productData} handleAddProduct={props.handleAddProduct}/>
            {/* <ProductsListItem productData={props.productData}/> */}
            <ProductList productData={props.productData}/>
        </>
    )
}

export default Products