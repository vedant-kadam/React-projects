import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Info</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetailsPage;
