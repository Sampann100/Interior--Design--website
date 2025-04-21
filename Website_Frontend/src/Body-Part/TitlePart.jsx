import { useEffect } from "react";
import style from "./TitlePart.module.css";
import { Link } from "react-router-dom";
import Typewriter from "react-typewriter-effect";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { fetctStatusAction } from "../../store/fetchStatus";

export default function TitlePart() {
  const items = useSelector((state) => state.items || []);
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(bagActions.addToBag(data));
        dispatch(fetctStatusAction.markFetchDone());
        dispatch(fetctStatusAction.markFetchFinish());
      })
      .catch((err) => console.log("Error: ", err));
  }, [dispatch, fetchStatus.fetchDone]);

  const addToCart = async (e, itemId) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId }),
    });
    if (response.ok) {
      await fetch("http://localhost:5000/cart")
        .then((res) => res.json())
        .then((data) => {
          dispatch(bagActions.addToBag(data));
        });
    }
  };

  const handleDeleteSubmit = async (e, itemId) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/itemDelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId }),
    });
  };

  const removeFromCart = (itemId) => {
    console.log("Removing item with ID:", itemId);
  };

  return (
    <main>
      <section className="container">
        <h1 className="preFade fadeIn my-5" style={{ marginLeft: "400px" }}>
          <Typewriter
            text="Orange County Interior Design"
            cursorColor="#000"
            typeSpeed={80}
            eraseSpeed={20}
            delay={2000}
            loop={Infinity}
            className={style.sqsrte}
          />
        </h1>
        <p className={`text-center ${style.para}`}>
          Discover the epitome of luxury and sophistication at Marc Pridmore
          Designs, Southern California's premier interior design firm and
          showroom. Our expert design services ensure that every space we touch
          exudes elegance and refinement.
        </p>
        <br />
        <div className="row">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                key={item._id || item.id || index}
              >
                <div
                  className="card shadow-sm border-0"
                  style={{
                    transition: "0.3s",
                    borderRadius: "15px",
                    overflow: "hidden",
                  }}
                >
                  <form
                    onSubmit={(e) => handleDeleteSubmit(e, item._id)}
                    style={{ marginLeft: "auto" }}
                  >
                    <input name="itemId" value={item._id} type="hidden" />
                    <button
                      type="submit"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <MdDeleteForever size={26} color="red" />
                    </button>
                  </form>
                  <img
                    src={item.imageUrl}
                    alt={`Product ${index + 1}`}
                    className="card-img-top img-fluid"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                  <div className="card-body">
                    <div>
                      <div className="company" style={{ fontWeight: "700" }}>
                        {item.itemName}
                      </div>
                      <p style={{ fontSize: "16px", fontWeight: "550" }}>
                        {item.description}
                      </p>
                      <p style={{ marginTop: "-12px", fontSize: "15px" }}>
                        Erikka Fogleman
                      </p>

                      <div style={{ marginTop: "-15px" }}>
                        <span
                          style={{ fontSize: "22px", fontWeight: "650" }}
                          className="me-2"
                        >
                          <span>₹{item.current_price}</span>
                        </span>
                        <span style={{ textDecoration: "line-through" }}>
                          <span>
                            <span>₹{item.original_price}</span>
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* {!cart.includes(item.imageUrl) ? ( */}
                    <button
                      className="btn btn-dark w-100 mt-2"
                      type="submit"
                      onClick={(e) => addToCart(e, item._id)}
                      style={{
                        transition:
                          "backgroundColor 0.3s ease, transform 0.2s ease",
                      }}
                    >
                      🛒 Add to Cart
                    </button>
                    {/* ) : (
                      <button
                        className="btn btn-success w-100 mt-2"
                        type="submit"
                        onClick={() => removeFromCart(item._id)}
                        style={{
                          transition:
                            "backgroundColor 0.3s ease, transform 0.2s ease",
                        }}
                      >
                        🛒 Remove to cart
                      </button> */}
                    {/* )} */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <hr />
      <section>
        <div className="row featurette">
          <div className="col-md-7">
            <img className={`${style.MpImage}`} src="Mp.png"></img>
            <h3 className={`${style.MpTitle}`}>
              WELCOME TO MARC PRIDMORE INTERIORS
            </h3>
            <p className={`${style.Mppara}`}>
              Experience the epitome of luxury interior design. Our journey
              began in 2000, and today, we continue to grace Orange County
              mansions and residential properties worldwide with our exquisite
              touch. Explore our world of elegance.
            </p>
            <button
              onClick={() => alert("Your appointment is Confirmed")}
              className={`${style.MeetMarc}`}
            >
              BOOK APPOINTMENT
            </button>
          </div>
          <div className="col-md-5">
            <img className={`${style.boxImage11}`} src="boxImage11.png"></img>
          </div>
        </div>

        <div className="row featurette">
          <div className="col-md-5 order-md-2">
            <h4 className={`${style.designTitle}`}>DESIGN SERVICES</h4>
            <p className={`${style.elegant}`}>Elegant Interior Design</p>
            <p>
              Embarki on a journey of sophistication and luxury with
              one-of-a-kind designs and elegant, seamless living solutions
              tailored to your way of living. Our Interior design services{" "}
            </p>
            <Link to="/Contact">
              <button className={`${style.CallButton}`}>CALL TO ENQUIRE</button>
            </Link>
          </div>
          <div className="col-md-7 mb-3">
            <img className={`${style.boxImage12}`} src="boxImage12.png"></img>
          </div>
        </div>
      </section>
    </main>
  );
}
