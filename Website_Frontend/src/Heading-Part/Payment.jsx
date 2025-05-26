import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft, MdShoppingBag } from "react-icons/md";

const Payment = () => {
  let bagItem = useSelector((state) => state.bagItem);
  const items = bagItem.map((group) => group.itemId);

  const CONVENIENCE_FEES = 99;
  let totalMRP = 0;
  let totalDiscount = 0;

  items.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="min-vh-100" style={{ background: "#f9f6f2" }}>
      <div className="container py-4">
        <Link
          to="/cart"
          className="d-flex align-items-center text-decoration-none mb-4"
          style={{ color: "#cd8f52" }}
        >
          <MdOutlineKeyboardArrowLeft size={24} />
          <span className="ms-1 fw-semibold">Back to My Cart</span>
        </Link>

        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div
            className="card-header border-0 py-4"
            style={{ background: "#fff" }}
          >
            <h1
              className="mb-0 text-center fw-bold"
              style={{ color: "#cd8f52", fontSize: "2rem" }}
            >
              Checkout Payment List
            </h1>
          </div>

          <div className="card-body p-4">
            <div className="row">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="card border-0 shadow-sm rounded-4 mb-4">
                  <div className="card-body p-4">
                    <h5 style={{ color: "#2c2c2c" }}>
                      <form>
                        {/* Personal Contact Detail */}
                        <div className="fw-bold mb-3">
                          <h3>Personal Detail: </h3>
                          <div class="mb-3">
                            <input
                              type="name"
                              name="name"
                              class="form-control"
                              placeholder="Full Name"
                              style={{ fontSize: "1.2rem" }}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Your Email"
                              style={{ fontSize: "1.2rem" }}
                              class="form-control"
                              required
                            />
                            <div id="emailHelp" class="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div class="mb-3">
                            <input
                              type="number"
                              name="number"
                              placeholder="Enter your contact number..."
                              style={{ fontSize: "1.2rem" }}
                              class="form-control"
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              type="address"
                              name="address"
                              placeholder="Enter your contact number..."
                              style={{ fontSize: "1.2rem" }}
                              class="form-control"
                              required
                            />
                          </div>
                        </div>
                        <br />
                        {/* Shippng */}
                        <div>
                          <h3>Shipping: </h3>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="radioDefault"
                              id="radioDefault1"
                            />
                            <label
                              class="form-check-label"
                              style={{ fontSize: "18px", fontWeight: "10px" }}
                              for="radioDefault1"
                            >
                              Standard Shipping
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              style={{ fontSize: "18px", fontWeight: "10px" }}
                              type="radio"
                              name="radioDefault"
                              id="radioDefault2"
                              checked
                            />
                            <label class="form-check-label" for="radioDefault2">
                              Upgrade my shipping
                            </label>
                          </div>
                        </div>
                        <br />
                        {/* Payment */}
                        <div>
                          <h3>Payment: </h3>
                          <div class="mb-3">
                            <input
                              type="number"
                              name="cardNumber"
                              placeholder="Enter card detail..."
                              class="form-control"
                              style={{ fontSize: "1.2rem" }}
                              required
                            />
                            <div className="my-2" style={{ display: "flex" }}>
                              <img
                                src="Visa img.png"
                                style={{ height: "40px" }}
                              />
                              <img src="visa2.png" style={{ height: "40px" }} />
                            </div>
                          </div>
                          <div class="mb-3">
                            <input
                              type="name"
                              name="name"
                              class="form-control"
                              placeholder="Expery date..."
                              style={{ fontSize: "1.2rem" }}
                              required
                            />
                          </div>
                        </div>
                        {/* check box */}
                        <div class="mb-3 form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />
                          <label class="form-check-label" for="exampleCheck1">
                            Check me out
                          </label>
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </h5>
                    <div className="bag-items-container">
                      {/* Items list will go here */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4" style={{ color: "#2c2c2c" }}>
                      Price Details
                    </h5>

                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">Total MRP</span>
                      <span className="fw-semibold">
                        ₹{totalMRP.toLocaleString()}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">Discount</span>
                      <span className="text-success fw-semibold">
                        -₹{totalDiscount.toLocaleString()}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">Convenience Fee</span>
                      <span className="fw-semibold">₹{CONVENIENCE_FEES}</span>
                    </div>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-4">
                      <span className="fw-bold" style={{ color: "#2c2c2c" }}>
                        Total Amount
                      </span>
                      <span
                        className="fw-bold"
                        style={{ color: "#cd8f52", fontSize: "1.2rem" }}
                      >
                        ₹{finalPayment.toLocaleString()}
                      </span>
                    </div>

                    <button
                      className="btn w-100 py-3 fw-semibold"
                      style={{
                        background: "#cd8f52",
                        color: "#fff",
                        borderRadius: "2rem",
                        fontSize: "1.1rem",
                        letterSpacing: "0.5px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "#ba7f49";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "#cd8f52";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      Book Counseller
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
