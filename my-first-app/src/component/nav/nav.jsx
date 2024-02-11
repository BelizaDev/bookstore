import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    display:flex;
    justify-content:space-between;
    padding:0 4rem;
    background-color:blue;
    align-items:center;

    
`

const StyledUl = styled.ul`
display:flex;
gap:30px;
list-style:none;
cursor:pointer;

`

const Nav = () => {
    return(
        <StyledNav>
        <h2>Logo</h2>
        <StyledUl>
            <Link to={"/"}> <li>Home</li></Link>
            <Link to={"/product"}> <li>Products</li></Link>
            <Link to={"/login"}> <li>Login</li></Link>
            <Link to={"/addproduct"}> <li>Add Product</li></Link>
        </StyledUl>
        </StyledNav>
    )
}

export default Nav