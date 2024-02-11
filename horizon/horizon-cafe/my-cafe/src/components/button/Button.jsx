import React, { useContext } from "react";
import styled from "styled-components";
import { HorizonContext } from "../context";

const StyledButton = styled.button`
  background-color: #f28039;
  color: #ffffff;
  padding: 5px 6px;
  cursor: pointer;

  &:hover {
    background-color: #e95525;
  }
`;
// function Button({ value, onClick, setService, serviceData }) {
function Button({ value, onClick }) {
  const { service, setService } = useContext(HorizonContext);
  const handlerService = () => {
    setService([
      ...service,
      {
        id: 5,
        name: "Reading",
        image:
          "https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=600",
        new_price: 8.0,
      },
    ]);
  };
  return (
    <div>
      <StyledButton onClick={handlerService}>{value}</StyledButton>
    </div>
  );
}

export default Button;
