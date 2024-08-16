
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ProductList } from "../Data/ProductList";
import { addItem } from "../redux/Reducer/Cart";

export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === props.id);

  const addToCart = () => {
    dispatch(addItem(props));
    navigate('/cart');
  };

  return (
    <div className="d-flex flex-column align-items-center ">
      <div className="mt-2 d-flex justify-content-center">
        <img
          src={props.thumbnail}
          height={225}
          width={300}
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className="mt-4 card-body text-center">
        <h5 className="card-title">{props.title}</h5>
        <h6>Price: Rs {props.price}</h6>
        <h6>Discount: {props.discountPercentage}%</h6>
        <h6>Description: {props.description}</h6>
        <h6>Rating: {props.rating}</h6>
        <div>
          {props.stock > 0 ? (
            <>

              {element?.count > 0 ? (
                <button
                  className="ms-2 mt-4 btn btn-success"
                  onClick={() => navigate('/cart')}
                >
                   Add to Cart
                </button>
              ) : (
                <button className="ms-2 mt-4 btn btn-success" onClick={addToCart}>
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button className="btn btn-outline-danger">Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
