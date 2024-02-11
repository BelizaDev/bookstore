import React from "react";
import ServiceCard from "./ServiceCard";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 300px;
  background-color: #eeeeee;
  margin-top: 30px;
`;

function ServiceList() {
  return (
    <StyledDiv>
      <h3>Our Services</h3>
      <ServiceCard />
    </StyledDiv>
  );
}

export default ServiceList;
