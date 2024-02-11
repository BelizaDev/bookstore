import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import { BookContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Button = styled.button`
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

const ErrorMessage = styled.div`
  background-color: #ffdddd;
  color: #d8000c;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
`;


function Login() {
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const { login, logout, isAuthenticated } = useContext(BookContext);
  
    const navigate = useNavigate();
    //   console.log("is authenticated", isAuthenticated);
  
    const handleChange = (e) => {
      setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (event) => {
      setIsLoginLoading(true);
      event.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:8080/api/user/login",
          loginInfo
        );
        console.log("response data", response);
  
        if (response.status === 200) {
          login();
          setIsLoginLoading(false);
          navigate("/services");
        }
      } catch (err) {
        console.error("error", err);
        setIsLoginLoading(false);
        setLoginError(true);
      }
    };
  
    return (
      <>
        <h3>Login</h3>
        <Form onSubmit={handleSubmit}>
          {isLoginLoading && <p>Loading...</p>}
          {loginError && !isLoginLoading && (
            <ErrorMessage>Authentication faild. Please try agian.</ErrorMessage>
          )}
          <Input
            type="email"
            name="email"
            value={loginInfo.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={loginInfo.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <Button type="submit">Login</Button>
        </Form>
      </>
    );
  }
  

export default Login