import React from "react";
import Navbar from "../Heading-Part/Navbar";
import Footer from "../Heading-Part/Footer";
import { Link } from "react-router-dom";

const cardData = [
  {
    img: "Image1.png",
    alt: "Premium Interior Design Services",
    title: "Premium Interior Design",
    desc: "Elevate your space to opulence. Discover the essence of luxury and sophistication tailored just for you.",
  },
  {
    img: "Image2.png",
    alt: "Custom Lighting Solutions",
    title: "Custom Lighting Solutions",
    desc: "When a one-of-a-kind look is what you’re after, we excel in creating custom lighting fixtures tailored for your space and lifestyle.",
  },
  {
    img: "Image3.png",
    alt: "Elegant Drapery Design",
    title: "Elegant Drapery Design",
    desc: "Imagine the luxurious feel of custom drapery cascading down your windows, adding a touch of elegance to any room.",
  },
];

const Service = () => {
  return (
    <>
      <div
        className="container my-5"
        style={{
          background: "linear-gradient(120deg, #fffdfa 60%, #f7e7d7 100%)",
          borderRadius: "2rem",
          boxShadow: "0 4px 32px rgba(205,143,82,0.08)",
          padding: "2.5rem 2rem",
        }}
      >
        <h1
          className="text-center mb-5"
          style={{
            color: "#cd8f52",
            fontFamily: "Poppins, Trebuchet MS, Arial, sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          Interior Design Services
        </h1>
        <div className="row g-4">
          {cardData.map((card, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "1.5rem",
                  transition: "transform 0.2s",
                  background: "#fff",
                }}
              >
                <img
                  src={card.img}
                  className="card-img-top"
                  alt={card.alt}
                  style={{
                    height: "320px",
                    objectFit: "cover",
                    borderTopLeftRadius: "1.5rem",
                    borderTopRightRadius: "1.5rem",
                  }}
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5
                    className="card-title mb-3"
                    style={{
                      fontSize: "1.5rem",
                      color: "#cd8f52",
                      fontWeight: 600,
                      fontFamily: "Poppins, Trebuchet MS, Arial, sans-serif",
                    }}
                  >
                    {card.title}
                  </h5>
                  <p
                    className="card-text text-center"
                    style={{ fontSize: "1rem", color: "#444" }}
                  >
                    {card.desc}
                  </p>
                  <Link to="/">
                    <button
                      className="btn fw-semibold mt-auto"
                      style={{
                        background: "#cd8f52",
                        color: "#fff",
                        borderRadius: "2rem",
                        padding: "10px 28px",
                        fontSize: "1.08rem",
                        letterSpacing: "1px",
                        boxShadow: "0 2px 8px rgba(205,143,82,0.08)",
                        border: "none",
                        marginTop: "1.5rem",
                        transition: "background 0.2s",
                      }}
                    >
                      View Recent Designs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
