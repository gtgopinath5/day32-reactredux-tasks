import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../Components/ProductListItem";
import { modifyItem, removeItem } from "../redux/Reducer/Cart";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };

  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate the total price
  const totalPrice = list.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  return (
    <div >
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListItem
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          {/* Display the total price */}
          <div className=" d-flex justify-content-center align-items-center">
            <h4>Total Price: Rs {totalPrice.toFixed(2)}</h4>
          </div>
        </>
      ) : (
        <h3>No Items In The Cart</h3>
      )}
    </div>
  );
}

