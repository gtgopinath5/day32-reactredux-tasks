import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();

  return (
    <div
      className="card m-2  text-center"
      style={{ width: 300 }}
      role="button"
      onClick={() => navigate(`/product/${props.id}`)}
    >
      <div className="mt-2 d-flex justify-content-center">
        <img
          src={props.thumbnail}
          height={150}
          width={180}
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6>Price: Rs {props.price}</h6>
        <h6>Discount: {props.discountPercentage}%</h6>
        <h6>Rating: {props.rating}</h6>
        <div>
          {props.stock > 0 ? (
            <button className="mt-4 btn btn-success">View Product</button>
          ) : (
            <button className="mt-4 btn btn-outline-danger">Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
