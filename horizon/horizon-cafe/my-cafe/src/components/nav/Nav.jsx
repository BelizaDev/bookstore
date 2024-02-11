import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../hero/hero';
import styled from 'styled-components';
import Home from '../Home';
// import './nav.css'

const StyledNav = styled.nav`
    display: flex;    
    justify-content:space-between;
    background-color:#f28039;
    color:#ffffff;
    box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)
`
const StyledUl = styled.ul`
    display:flex;
    list-style:none;
    gap:1rem;
    text-decoration: none;
          
`
function Nav() {
  return (
    <>
        <StyledNav>
       <h3>Horizon Cafe</h3>
       
      
       <StyledUl>
      
       <Link style={{textDecoration:'none', color:"#ffffff"}} to="/"><li>Home</li></Link>
        <Link style={{textDecoration:'none', color:"#ffffff"}} to="/aboutus"><li>About Us</li></Link>
        <Link style={{textDecoration:'none', color:"#ffffff"}} to="/service"><li>Service</li></Link>
       
        </StyledUl>
      
      
       </StyledNav>
      
         {/* <Hero /> */}
         {/* <Home /> */}
    </>
  )
}

export default Nav