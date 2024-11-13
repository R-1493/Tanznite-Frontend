import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderItem from "./OrderItem";
function OrderDashBoard(props) {
  const [orderResponse, setOrderResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchData() {
    let url = "http://localhost:5125/api/v1/Order";
    axios
      .get(url)
      .then((response) => {
        setOrderResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <span className="text-lg font-bold text-gray-700 ">
        <h1> Order DashBoard </h1>
      </span>{" "}
      <div>
        {orderResponse.length > 0 ? (
          orderResponse.map((order) => (
            <OrderItem
              key={order.orderId}
              order={order}
              fetchData={fetchData}
            />
          ))
        ) : (
          <p>No Order available.</p>
        )}
      </div>
    </div>
  );
}

export default OrderDashBoard;
