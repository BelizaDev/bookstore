import React from 'react';
import logo from '../assets/logo_original.jpg'

import {useState} from 'react';
import { Link } from 'react-router-dom';


import './nav.css'


function Navbar() {
  
  const [menu, setMenu] = useState("shop")

  return (
    <div>
        <div className='navbar'>
          <div className="nav-logo">
            <img width="100px" height="100px" src={logo} alt='book store logo' />
           <h2>The Book House</h2>
          </div>
          
        <ul className='nav-menu'>
          <li onClick={() => {setMenu("shop")}}><Link to="/">Home</Link>{menu==="shop"? <hr/>:<></>}</li>
          <li onClick={() => {setMenu("books")}}><Link to="/addbook">Add-Book</Link> {menu==="books"? <hr/>:<></>} </li>
          <li onClick={() => {setMenu("toys")}}><Link to="/viewbook">View-Book</Link> {menu==="toys"?<hr/>:<></>}</li>
        
        </ul>
        <div className='cart-login'>
          <button><Link to='/register'>SignUp</Link></button>
          <button><Link to='/Login'>SignIn</Link></button>
           
                    
        </div>
      
        </div>

    </div>
  )
}

export default Navbar






























// import React from 'react';
// import logo from '../assets/logo.png';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import './nav.css'

// // const StyledNav = styled.nav`
// // background-color:#FF8800;
// // display:flex;

// // justify-content:space-between;
// // align-items:center;
// // `
// // const StyledPara = styled.p`
// // font-size:25px;
// // font-weight:500;

// // `
// // const StyledLogo = styled.div`
// // display:flex;
// // align-items:center;
// // gap:20px;
// // `
// // const StyledUl = styled.ul`
// // list-style:none;
// // display:flex;
// // gap:20px;
// // margin-right:15px;
// // `
// // const StyledLi = styled.li`
// // font-weight:400;
// // cursor:pointer;
// // `

// function Nav() {
//   return (
//     <div>
//         <>
//           {/* <StyledNav> */}
//           <nav>
//             <StyledLogo>
//                 <img width="100px" height="100px" src={logo} alt='book store logo' />
//                 <StyledPara>The Book House</StyledPara>
//             </StyledLogo>
//             <StyledUl>
//                 <StyledLi>
//                 <Link to="/">Home</Link></StyledLi>
//                 <StyledLi>  <Link to="/addbook">Add-Book</Link></StyledLi>
//                 <StyledLi>
//                   <Link to="/viewbook">View-Book</Link></StyledLi>
//             </StyledUl>
//             </nav>
//             {/* </StyledNav>   */}
//         </>
//     </div>
//   )
// }

// export default Nav