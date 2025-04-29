import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetctStatusAction } from "../../store/fetchStatus";
import { itemActions } from "../../store/itemSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetctStatusAction.markFetchStarted());

    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((items) => {
        dispatch(itemActions.addInitialState(items));
        dispatch(fetctStatusAction.markFetchDone());
        dispatch(fetctStatusAction.markFetchFinish());
      })
      .catch((error) => console.error("Fetch error:", error));

    return () => {
      controller.abort();
    };
  }, [fetchStatus.fetchDone]);

  return null;
};

export default FetchItem;
