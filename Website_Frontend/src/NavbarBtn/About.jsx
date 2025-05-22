import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section
        className="container my-5 py-4 px-4 rounded-4 shadow"
        style={{
          background: "linear-gradient(120deg, #fffdfa 60%, #f7e7d7 100%)",
          maxWidth: "1100px",
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-7">
            <h2
              className="fw-bold mb-4"
              style={{
                color: "#cd8f52",
                fontSize: "2.3rem",
                fontFamily: "Poppins, serif",
              }}
            >
              Marc Pridmore Interiors: A Legacy of Elegance
            </h2>
            <p className="text-dark mb-3" style={{ fontSize: "1.15rem" }}>
              Immerse yourself in the world of luxury interior design with Marc
              Pridmore Interiors. Since our humble beginnings in Orange County
              in 2000, we have been dedicated to furnishing opulent mansions and
              grand residential properties worldwide with unparalleled
              sophistication and style.
            </p>
            <p className="text-dark mb-3" style={{ fontSize: "1.15rem" }}>
              Our esteemed team of designers and craftsmen bring dreams to life,
              turning spaces into masterpieces that leave a lasting impression.
              With meticulous attention to detail and an eye for perfection, we
              go above and beyond to exceed the expectations of our discerning
              clientele.
            </p>
            <p className="text-dark mb-4" style={{ fontSize: "1.15rem" }}>
              Experience the timeless elegance and superior quality that defines
              Marc Pridmore Interiors. Elevate your living spaces to new heights
              and indulge in the epitome of luxury and comfort.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Link to="/service">
                <button
                  className="btn fw-semibold"
                  style={{
                    background: "#cd8f52",
                    color: "#fff",
                    borderRadius: "2rem",
                    padding: "10px 32px",
                    fontSize: "1.1rem",
                    letterSpacing: "1px",
                    boxShadow: "0 2px 8px rgba(205,143,82,0.08)",
                    border: "none",
                  }}
                >
                  Our Portfolio
                </button>
              </Link>
              <Link to="/Contact">
                <button
                  className="btn btn-outline-dark fw-semibold"
                  style={{
                    borderRadius: "2rem",
                    padding: "10px 32px",
                    fontSize: "1.1rem",
                    letterSpacing: "1px",
                    border: "2px solid #cd8f52",
                    color: "#cd8f52",
                    background: "transparent",
                  }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="NavbarHeroImage3.jpg"
              alt="Marc Pridmore Interiors"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "2rem",
                boxShadow: "0 8px 32px rgba(205,143,82,0.13)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
