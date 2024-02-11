import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user)

  const handleSubmitUser = async (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/api/user/register", user)
    .then(response => {
      alert("Registration successful")
      setUser({
        firstName: "",
    lastName: "",
    email: "",
    password: "",
      })
    }).catch(err => console.error("Something went wrong. Please try again"))
  }
  return (
    <div>
      <form onSubmit={handleSubmitUser}>
        <input
          name="firstName"
          value={user.firstName}
          onChange={handleChangeUser}
        />
        <input name="lastName" value={user.lastName} onChange={handleChangeUser} />
        <input name="email" value={user.email} onChange={handleChangeUser} />
        <input name="password" value={user.password} onChange={handleChangeUser} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
