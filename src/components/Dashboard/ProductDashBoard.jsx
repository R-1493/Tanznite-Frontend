import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductDashBoard(props) {
  const [productResponse, setProductResponse] = useState({
    products: [],
    totalCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return <div>Product Dashboard</div>;
}

export default ProductDashBoard;
