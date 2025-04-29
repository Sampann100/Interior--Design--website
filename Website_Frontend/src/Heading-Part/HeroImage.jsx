import React from "react";

const HeroImage = () => {
  return (
    <>
      <section>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner bg-body-tertiary">
            <div className="carousel-item active">
              <img
                src="NavbarHeroImage1.jpg"
                className="d-block p-3 w-100"
                alt="..."
                style={style.HeroHeight}
              />
            </div>
            <div className="carousel-item">
              <img
                src="NavbarHeroImage2.jpg"
                className="d-block p-3 w-100"
                alt="..."
                style={style.HeroHeight}
              />
            </div>
            <div className="carousel-item">
              <img
                src="NavbarHeroImage3.jpg"
                className="d-block p-3 w-100"
                style={style.HeroHeight}
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroImage;

const style = {
  HeroHeight: {
    height: "580px",
    borderRadius: "40px"
  },
};