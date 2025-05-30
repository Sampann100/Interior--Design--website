import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BagSummary = () => {
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
    <div className="mb-4">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagItem.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <Link to="/payment">
        <button className="btn-place-order">
          <div className="css-xjhrni">Book Counseller</div>
        </button>
      </Link>
    </div>
  );
};

export default BagSummary;
