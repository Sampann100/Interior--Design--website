import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetctStatusAction } from "../../store/fetchStatus";
import { itemActions } from "../../store/itemSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();

    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then(({items}) => {
        // console.log(items);
        dispatch(fetctStatusAction.markFetchDone());
        dispatch(fetctStatusAction.markFetchFinish());
        dispatch(itemActions.addInitialState(items));
      })
      .catch((error) => console.error("Fetch error:", error));

    return () => {
      controller.abort();
    };
  }, [fetchStatus.fetchDone]);

  return null;
};

export default FetchItem;
