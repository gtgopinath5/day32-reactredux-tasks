import React from "react";

export default function ProductListItem(props) {
  return (
    <div className="m-4 d-flex align-items-center justify-content-center">
      <div className="me-4 d-flex align-items-center">
        <img
          src={props.thumbnail}
          height={150}
          width={180}
          alt={props.title}
          className="border-radius-9 me-4"
        />
        <div>
          <h5 className="card-title">{props.title}</h5>
          <h6 className="mt-2">Price: Rs {props.price}</h6>
          <h6 className="mt-2">Discount: {props.discountPercentage}%</h6>
          <h6 className="mt-2">Rating: {props.rating}</h6>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-danger me-3" onClick={props.incrementItem}>+</button>
        <span>Quantity: {props.count}</span>
        <button className="btn btn-danger ms-3 me-3" onClick={props.decrementItem}>-</button>
        <button className="btn btn-danger" onClick={props.removeItem}>Remove</button>
      </div>
    </div>
  );
}
