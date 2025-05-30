import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { itemActions } from "../../store/itemSlice";

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
    const response = await fetch("https://interior-design-website-backend.onrender.com/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await fetch("https://interior-design-website-backend.onrender.com/items");
    const items = await res.json();

    dispatch(itemActions.addInitialState(items));
    navigate("/");
    reset();
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h2 className="text-center mb-4 fw-bold">Add Interior Product</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              autoComplete="off"
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">Product Name</label>
                <input
                  type="text"
                  {...register("itemName", {
                    required: "Product name is required.",
                    pattern: {
                      value: /^[A-Za-z\s&]+$/,
                      message:
                        "Product name must contain only letters and spaces.",
                    },
                  })}
                  className={`form-control ${
                    errors.itemName ? "is-invalid" : ""
                  }`}
                  placeholder="Enter product name"
                />
                {errors.itemName && (
                  <div className="invalid-feedback">
                    {errors.itemName.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <textarea
                  {...register("description", {
                    required: "Description is required.",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message:
                        "Description must contain only letters and spaces.",
                    },
                  })}
                  className={`form-control ${
                    errors.description ? "is-invalid" : ""
                  }`}
                  placeholder="Enter product description"
                  rows="3"
                ></textarea>
                {errors.description && (
                  <div className="invalid-feedback">
                    {errors.description.message}
                  </div>
                )}
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Current Price ($)
                  </label>
                  <input
                    type="number"
                    {...register("current_price", { required: true, min: 1 })}
                    className={`form-control ${
                      errors.current_price ? "is-invalid" : ""
                    }`}
                    placeholder="Enter price"
                  />
                  {errors.current_price && (
                    <div className="invalid-feedback">
                      Current price is required.
                    </div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Original Price ($)
                  </label>
                  <input
                    type="number"
                    {...register("original_price", { required: true, min: 1 })}
                    className={`form-control ${
                      errors.original_price ? "is-invalid" : ""
                    }`}
                    placeholder="Enter price"
                  />
                  {errors.original_price && (
                    <div className="invalid-feedback">
                      Original price is required.
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Product Image URL
                </label>
                <input
                  type="url"
                  {...register("imageUrl", { required: true })}
                  className={`form-control ${
                    errors.imageUrl ? "is-invalid" : ""
                  }`}
                  placeholder="https://example.com/image.jpg"
                />
                {errors.imageUrl && (
                  <div className="invalid-feedback">Image URL is required.</div>
                )}
              </div>

              <button
                className="btn btn-primary w-100 py-2 fw-semibold rounded-pill shadow-sm"
                type="submit"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
