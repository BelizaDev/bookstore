import React from 'react';
import Button from './button/Button';
import { useNavigate } from 'react-router-dom';


function AboutUs() {
  const navigate = useNavigate();

  const aboutUsClick = () => {
    navigate("/service")
  }
  return (
    <div>
      <h1>Welcome to about us page</h1>
      
      <Button onClick={aboutUsClick} value="Learn more about us"/>
    </div>
  )
}

export default AboutUs