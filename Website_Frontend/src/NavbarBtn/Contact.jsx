import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Address1: "",
    Address2: "",
    Country: "",
    State: "",
    Zip: "",
    Message: "",
  });

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleBothActions = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await handleSubmit(e);
    await handleGenerateImage();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    const nameRegex = /^[A-Za-z]+$/;

    if (!formData.FirstName.trim()) {
      errors.FirstName = "FirstName is required.";
    } else if (!nameRegex.test(formData.FirstName)) {
      errors.FirstName = "first name can only contain letters and spaces.";
    }

    if (!formData.LastName.trim()) {
      errors.LastName = "LastName is required.";
    } else if (!nameRegex.test(formData.LastName)) {
      errors.LastName = "last name can only contain letters and spaces.";
    }

    if (!formData.Email) errors.Email = "Email is required.";
    if (!formData.Address1) errors.Address1 = "Address1 is required.";
    if (!formData.Address2) errors.Address1 = "Address2 is required.";
    if (!formData.Country) errors.Country = "Country is required.";
    if (!formData.State) errors.State = "State is required.";
    if (!formData.Zip) errors.Zip = "Zip is required.";
    if (!formData.Message) errors.Message = "Message is required.";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      FirstName,
      LastName,
      Email,
      Address1,
      Address2,
      Country,
      State,
      Zip,
      Message,
    } = formData;

    try {
      const response = await fetch(
        "https://interior-design-website-backend.onrender.com/personalcontactdetail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FirstName,
            LastName,
            Email,
            Address1,
            Address2,
            Country,
            State,
            Zip,
            Message,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message || "Your Detail is successfully saved!");
      } else {
        const error = await response.json();
        setMessage(error.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Failed to connect to the server. Please try later.");
    }

    setFormData({
      FirstName: "",
      LastName: "",
      Email: "",
      Address1: "",
      Address2: "",
      Country: "",
      State: "",
      Zip: "",
      Message: "",
    });
  };

  // Function to generate AI image
  const handleGenerateImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://interior-design-website-backend.onrender.com/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: formData.Message }),
      });

      const data = await response.json();
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      } else {
        setMessage("Failed to generate image");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      setMessage("Error generating image");
    }
    setLoading(false);
  };

  return (
    <>
      <br />
      <center>
        <h1>Contact Detail Form & AI Generated Image</h1>
      </center>
      <form
        className="container my-4 bg-body-tertiary"
        onSubmit={handleBothActions}
      >
        <div className="row g-4">
          <div className="col-sm-6">
            <label htmlhtmlFor="firstName" className="form-label">
              First name <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <input
              required
              type="text"
              name="FirstName"
              className="form-control"
              onChange={handleChange}
              id="firstName"
              value={formData.FirstName}
              fdprocessedid="ldsz2"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlhtmlFor="lastName" className="form-label">
              Last name <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <input
              required
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              className="form-control"
              id="lastName"
              fdprocessedid="bxqoxc"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>

          <div className="col-12">
            <label htmlhtmlFor="email" className="form-label">
              Email <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              className="form-control"
              onChange={handleChange}
              id="email"
              required
              placeholder="you@example.com"
              fdprocessedid="ppf4nq"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-6">
            <label htmlhtmlFor="address" className="form-label">
              Address 1 <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <input
              type="text"
              name="Address1"
              value={formData.Address1}
              className="form-control"
              onChange={handleChange}
              id="address"
              placeholder="1234 Main St"
              required
              fdprocessedid="9l558d"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-6">
            <label htmlhtmlFor="address2" className="form-label">
              Address 2 <span className="text-body-secondary">(required)</span>
            </label>
            <input
              required
              type="text"
              name="Address2"
              value={formData.Address2}
              className="form-control"
              onChange={handleChange}
              id="address2"
              placeholder="Apartment or suite"
              fdprocessedid="i40azp"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
          </div>

          <div className="col-md-5">
            <label htmlhtmlFor="country" className="form-label">
              Country
            </label>
            <select
              className="form-select"
              name="Country"
              required
              value={formData.Country}
              id="country"
              onChange={handleChange}
              fdprocessedid="chw9xm"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            >
              <option value="">Choose...</option>
              <option>United States</option>
              <option>India</option>
              <option>Pakistan</option>
              <option>Australia</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div className="col-md-4">
            <label htmlhtmlFor="state" className="form-label">
              State
            </label>
            <select
              required
              className="form-select"
              name="State"
              value={formData.State}
              id="state"
              onChange={handleChange}
              fdprocessedid="2kmels"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            >
              <option value="">Choose...</option>
              <option>Madhya Pradesh</option>
              <option>Mahrashtra</option>
              <option>Rajesthan</option>
              <option>Gujrat</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-3">
            <label htmlhtmlFor="zip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              name="Zip"
              className="form-control"
              onChange={handleChange}
              value={formData.Zip}
              id="zip"
              placeholder=""
              required
              fdprocessedid="ax9jd"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            />
            <div className="invalid-feedback">Zip code required.</div>
          </div>

          <div className="mb-3">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">
              Message <span style={{ color: "#89A8B2" }}>(required)</span>
            </label>
            <textarea
              required
              className="form-control"
              name="Message"
              onChange={handleChange}
              value={formData.Message}
              id="exampleFormControlTextarea1"
              placeholder="Enter the text"
              rows="3"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
            ></textarea>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-dark px-4 py-3"
              disabled={loading}
              style={{ borderRadius: "25px" }}
            >
              {loading
                ? "Saving... & Generating Image..."
                : "Save Data & Generate AI Image"}
            </button>
          </div>

          {imageUrl && (
            <div className="mt-3">
              <h3>Generated Image:</h3>
              <img
                src={imageUrl}
                alt="AI Generated"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </div>
          )}

          {message && <p className="error-message">{message}</p>}
        </div>
      </form>
    </>
  );
};

export default Contact;
