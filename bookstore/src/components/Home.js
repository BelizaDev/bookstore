import React from 'react';
import hand_icon from '../assets/images/hand_icon.png';
import arrow_sign from '../assets/images/arrow.png';
import girl_reading from '../assets/images/grr.png';

import './home.css';
import BookList from './book/BookList';
import NyBestSeller from './NyBestSeller';
import BookTable from './book/BookTable';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const ViewBook = () => {
    navigate("/viewbook")
  }

  return (
    <>
    <div className='main-container'>
    <div className='hero-left-container'>
        
        <div className="hero-left">
           <p>Book House</p>
           
        </div>
        <p>Delivers</p>
        <p>Books</p>
        <div className='hero-left-arrow'>
            <h6  onClick={ViewBook}>Go to Our Books</h6>
            <img src={arrow_sign} alt='arrow sign to the right'/>
        </div>
       

    </div>
    <div className="hero_right">
            <img width="400" height="400" src={girl_reading} alt='right image of a girl reading a book'/>
        </div>
    </div>
    {/* <h3 className='title-ny'>Best Sellers World Books</h3> */}
    {/* <NyBestSeller /> */}
    {/* <BookTable /> */}
    </>
  )
 
}

export default Home