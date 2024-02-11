import React from "react";
import Button from "./button/Button";
import { useNavigate } from "react-router-dom";
import coffehouse from "../components/assets/images/coffeehouse.avif";

function Home(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/aboutus");
  };
  return (
    <div>
      <img src={coffehouse} alt="coffee house image" />
      {/* <Button onClick={handleClick} value="Learn More" /> */}
    </div>
  );
}

export default Home;
