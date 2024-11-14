import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderItem from "./OrderItem";
function UserOrderHistory(props) {
  const { userData } = props;
  const [orderList, setOrderList] = useState([]);
  function getOrderByUserId() {
    const token = localStorage.getItem("token");
    const url =
      "https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/Order/Order";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setOrderList(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getOrderByUserId();
  }, []);

  if (orderList.length === 0) {
    return <div> No order history </div>;
  }
  return (
    <div className="p-1 flex flex-wrap items-start justify-start">
      <div className="p-1 flex flex-wrap items-start ml-4 justify-start w-full">
        <h1 className="text-2xl font-bold mb-4">User Order History</h1>
        <div className="orderListContainer w-full">
          {orderList.length === 0 ? (
            <div>No order history</div>
          ) : (
            <div className="flex flex-wrap justify-center">
              {orderList.map((order) => (
                <OrderItem key={order.orderId} order={order} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserOrderHistory;
