import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  let navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://uuexpress.herokuapp.com/api/admin/authenticate",
        {
          username: formData.username,
          password: formData.password,
        },
        { withCredentials: true }
      )
      .then(function (res) {
        if (res.status === 200) {
          // setFormData({ username: "", password: "" });
          navigate("/admin");
          console.log(res);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(function (err) {
        console.error(err);
        alert("Error logging in, please try again.");
      });
  };

  return (
    <>
      {" "}
      <form className="pt-32 flex flex-col space-y-2">
        <h1>Login Below!</h1>
        <input
          className="p-4"
          type="username"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          className="p-4"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button className="p-4" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
