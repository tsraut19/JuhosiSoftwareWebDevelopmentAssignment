import React, { useState, useEffect } from "react";
import { getLoginDetails } from "../ComponentServices/ApiServices";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  //---------- Managing session ----------
  // useEffect(() => {
  //     if (
  //     sessionStorage.getItem("isActive") !== null &&
  //     sessionStorage.getItem("isActive") === "true"
  //     ) {
  //     setLoggedIn(true);
  //     }
  // }, []);

  const initialValues = {
    name: "",
    password: "",
  };

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formValues = {
        name,
        password,
      };

      const response = await getLoginDetails(formValues);
      console.log(response.data);

      setName("");
      setPassword("");
      alert("Login success");
      navigate("/form");
    } catch (error) {
      console.log(error);
      alert("error occured while logging in");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
