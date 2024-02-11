import React, { useContext } from "react";
import styled from "styled-components";
import { HorizonContext } from "../context";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 15px;
  padding-top: 20px;
  text-align: center;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;
const StyledContainer = styled.main`
  display: flex;
  gap: 1rem;
`;

function ServiceCard() {
  const { service, setService } = useContext(HorizonContext);

  return (
    <StyledDiv>
      <StyledContainer>
        {service.map((data) => {
          return (
            <StyledCard key={data.id}>
              <img src={data.image} height={150} width={150} />
              <p>${data.new_price}</p>
              <h5>{data.name}</h5>
            </StyledCard>
          );
        })}
      </StyledContainer>
    </StyledDiv>
  );
}

export default ServiceCard;
