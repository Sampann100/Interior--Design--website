import { useEffect } from "react";
import BagItem from "../src/NavbarBtn/BagItem";
import style from "./Bag.module.css";
import BagSummary from "../src/NavbarBtn/BagSummary";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { fetctStatusAction } from "../store/fetchStatus";

const Bag = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const bagItems = useSelector((state) => state.bagItem);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        dispatch(bagActions.addToBag(data));
        dispatch(fetctStatusAction.markFetchDone());
        dispatch(fetctStatusAction.markFetchFinish());
      })
      .catch((err) => console.log("Error: ", err));
  }, [dispatch, fetchStatus.fetchDone]);

  return (
    <>
      <main>
        <div className={style.bagpage}>
          <div className={style.bagitemscontainer}>
            {bagItems.length > 0 ? (
              Array.isArray(bagItems) &&
              bagItems.length > 0 &&
              bagItems.map((newitem) => (
                <BagItem newitem={newitem} key={newitem._id} />
              ))
            ) : (
              <h1 className={style.container} style={{ color: "#5b783e" }}>
                Your cart is empty!!
              </h1>
            )}
          </div>

          <div className={style.bagsummary}>
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
