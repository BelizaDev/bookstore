import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
background-image: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
`

 const StyledForm = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
 const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;
 const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #A44CD3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #8800C7;
  }
`;
 const StyledTitle = styled.h2`
  text-align: center;
  color: #333;
`;
 const StyledErrorMessage = styled.div`
  background-color: #ffdddd;
  color: #d8000c;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
`;
 const StyledSuccessMessage = styled.div`
  background-color: #ddffdd;
  color: #270;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
`;




const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/user/register", user)
      .then((response) => {
        alert("Registraton is successful");
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.error("faild to register", err);
      });
  };
  return (
    <MainContainer>
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>Register</StyledTitle>
      {/* {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Registration Successful!</SuccessMessage>} */}
      <StyledInput
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <StyledInput
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <StyledInput
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <StyledInput
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      {/* Add other input fields as necessary */}
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
    </MainContainer>
  );
};
export default Register;