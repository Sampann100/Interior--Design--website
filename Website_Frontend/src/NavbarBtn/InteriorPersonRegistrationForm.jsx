import React from "react";
// import { useState } from "react-hook-form";

const InteriorPersonRegistrationForm = () => {
  return (
    <div className="container my-4 bg-body-tertiary">
      <div className="d-flex flex-column align-items-center justify-content-center h-100 right-side">
        <br />
        <h1 className="title-right">Interior Designer Form</h1>
        <div className="w-100 mt-2"></div>{" "}
        <form
          className="w-100 mt-4"
          data-hs-cf-bound="true"
          method="POST"
          action="/InteriorPersonResgitartionForm"
        >
          <label className="mb-1 font-weight-semibold">
            Full Name<span className="required-star">*</span>
          </label>{" "}
          <input
            className="form-control"
            type="name"
            name="FullName"
            required="required"
            aria-required="true"
            style={{ border: "1.5px solid black", borderRadius: "25px" }}
          />{" "}
          <label className="mb-1 font-weight-semibold">
            Email Address<span className="required-star">*</span>
          </label>{" "}
          <div className="mb-3">
            <input
              type="email"
              name="Email"
              required="required"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
              className="form-control"
            />
          </div>
          <label className="mb-1 font-weight-semibold">
            Phone Number<span className="required-star">*</span>
          </label>{" "}
          <div className="mb-3">
            <input
              type="number"
              name="PhoneNumber"
              required="required"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
              className="form-control"
            />
          </div>
          <label className="mb-1 font-weight-semibold">
            Year of Experience<span className="required-star">*</span>
          </label>{" "}
          <div className="mb-3">
            <input
              type="number"
              name="Experience"
              required="required"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
              className="form-control"
            />
          </div>
          <label className="mb-1 font-weight-semibold">
            Education<span className="required-star">*</span>
          </label>{" "}
          <div className="mb-3">
            <input
              type="text"
              name="Education"
              required="required"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
              className="form-control"
            />
          </div>
          <label className="mb-1 font-weight-semibold">
            Certifications<span className="required-star">*</span>
          </label>{" "}
          <div className="mb-3">
            <input
              type="text"
              name="Certificates"
              required="required"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
              className="form-control"
            />
          </div>
          <label className="mb-1 font-weight-semibold">
            Specialization<span className="required-star">*</span>
          </label>{" "}
          <div className="mb-3">
            <input
              type="text"
              name="Specialization"
              required="required"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
              className="form-control"
            />
          </div>
          <label className="mb-1 font-weight-semibold">
            Link to Online Portfolio<span className="required-star">*</span>
          </label>{" "}
          <div className="mb-3">
            <input
              type="text"
              name="Portfolio"
              required="required"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
              className="form-control"
            />
          </div>
          <label className="mb-1 font-weight-semibold">
            Previous Job Title(s)<span className="required-star">*</span>
          </label>{" "}
          <div className="mb-3">
            <textarea
              type="text"
              name="PreviousJobTitle"
              required="required"
              style={{ border: "1.5px solid black", borderRadius: "25px" }}
              className="form-control"
            />
          </div>
          <center>
            <button
              id="buttonRegister"
              type="submit"
              className="btn mb-3 mt-4 font-weight-semibold btn-primary btn-block"
              fdprocessedid="vkz6tq"
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default InteriorPersonRegistrationForm;
