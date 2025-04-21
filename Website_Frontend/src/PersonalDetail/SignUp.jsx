import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.Username) errors.Username = "Username is required.";
    if (!formData.Email) errors.Email = "Email is required.";
    if (!formData.Password) errors.Password = "Password is required.";
    if (formData.Password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { Username, Email, Password } = formData;

    if (Username && Email && Password) {
      try {
        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Username, Email, Password }),
        });

        if (response.ok) {
          const result = await response.json();
          setMessage(result.message || "Sign up successful!");
          {
            setTimeout(() => {
              navigate("/Login");
            }, 1000);
          }
        } else {
          const error = await response.json();
          setMessage(
            error.message || "Something went wrong. Please try again."
          );
        }
      } catch (error) {
        setMessage("Failed to connect to the server. Please try later.");
      }
    } else {
      setMessage("Please fill in all fields.");
    }

    formData.Username = "";
    formData.Email = "";
    formData.Password = "";
    formData.confirmPassword = "";
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#5cb85c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1 style={headingStyle}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>
              Username:
            </label>
            <input
              type="text"
              id="name"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.Username && <p style={errorStyle}>{errors.Username}</p>}
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.Email && <p style={errorStyle}>{errors.Email}</p>}
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.Password && <p style={errorStyle}>{errors.Password}</p>}
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="confirmPassword" style={labelStyle}>
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.confirmPassword && (
              <p style={errorStyle}>{errors.confirmPassword}</p>
            )}
          </div>

          {errors.apiError && <p style={errorStyle}>{errors.apiError}</p>}

          <button type="submit" style={buttonStyle} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
