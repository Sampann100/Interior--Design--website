import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { itemActions } from "../../store/itemSlice";
import { fetctStatusAction } from "../../store/fetchStatus";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await fetch("http://localhost:5000/items");
    const items = await res.json();

    dispatch(itemActions.addInitialState(items));
    navigate("/");
    reset();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Add Interior Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              {...register("itemName", { required: true })}
              className="form-control"
              placeholder="Enter product name"
            />
            {errors.name && (
              <div style={{ fontSize: "15px" }}>Filed is required.</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="form-control"
              placeholder="Enter product description"
              rows="3"
            ></textarea>
            {errors.name && (
              <div style={{ fontSize: "15px" }}>Filed is required.</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Current Price ($)</label>
            <input
              type="number"
              {...register("current_price", { required: true })}
              className="form-control"
              placeholder="Enter price"
            />
            {errors.name && (
              <div style={{ fontSize: "15px" }}>Filed is required.</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Original Price ($)</label>
            <input
              type="number"
              {...register("original_price", { required: true })}
              className="form-control"
              placeholder="Enter price"
            />
            {errors.name && (
              <div style={{ fontSize: "15px" }}>Filed is required.</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image: </label>
            {/*<input
              type="file"
              accept=".jpg, .png"
              {...register("imageFile")}
              className="form-control"
            />
            <div style={{ fontSize: "17px" }}>or</div>*/}
            <input
              type="url"
              {...register("imageUrl", { required: true })}
              className="form-control"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <input
            className="btn btn-primary w-100"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;