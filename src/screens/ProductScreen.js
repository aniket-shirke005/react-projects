import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductScreen = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const params = useParams();
  console.log("params :", params.id, pathname);
  return (
    <>
      <div>Product</div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </>
  );
};

export default ProductScreen;
