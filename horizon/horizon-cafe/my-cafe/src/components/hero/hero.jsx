import Button from "../button/Button";
import woodenSpoon from "../assets/images/coffee-beans-2258865_640.jpg";
import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const StyledHeader = styled.header`
  display: flex;
  gap: 10px;
  padding-top: 2rem;
`;
const StyledSection = styled.section`
  text-align: left;
  width: 75%;
`;

const StyledDiv2 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

let Hero = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledSection>
          <h2>Horizon Cafe</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button value="view more" />
        </StyledSection>
        <img
          width="300px"
          height="200px"
          src={woodenSpoon}
          alt="coffee bean with wooden spoon"
        />
      </StyledHeader>
    </StyledMain>
  );
};
export default Hero;
