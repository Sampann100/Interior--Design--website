import { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { fetctStatusAction } from "../../store/fetchStatus";

const BagItem = ({ newitem }) => {
  const item = newitem.itemId;
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = async (e, itemId) => {
    e.preventDefault();
    const res = await fetch("https://interior-design-website-backend.onrender.com/deleteCartItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId }),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(bagActions.removeFromBag(itemId));
      dispatch(fetctStatusAction.markFetchDone());
      dispatch(fetctStatusAction.markFetchFinish());
    }
  };

  return (
    <>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.imageUrl} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.itemName}</div>
          <div className="item-name">Erikka Fogleman</div>
          <div className="price-container">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount-percentage">
              {/* ({item.discount_percentage}% OFF) */}
              33% OFF
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">28 days</span> return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">28 oct</span>
          </div>
        </div>

        <div
          className="remove-from-cart"
          onClick={(e) => handleRemoveItemFromCart(e, item._id)}
        >
          <MdDeleteForever size="27px" />
        </div>
      </div>
    </>
  );
};

export default BagItem;
