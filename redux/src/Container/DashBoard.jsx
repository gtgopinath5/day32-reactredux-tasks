import React from "react";
import { ProductList } from "../Data/ProductList";
import ProductCard from "../Components/ProductCard";

export default function DashBoard() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="d-flex flex-wrap justify-content-center p-3">
        {ProductList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

