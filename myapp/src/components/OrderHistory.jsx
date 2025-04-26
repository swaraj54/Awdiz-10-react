import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  console.log(orders, "orders");
  const userData = useSelector((state) => state.user.user);
  const getOrderHistory = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/get-order-history",
        { userId: userData.userId }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userData?.userId) {
      getOrderHistory();
    }
  }, [userData]);
  return (
    <div>
      <h1>OrderHistory</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ border: "1px solid red" }}>
          {orders.map((order, i) => (
            <div
              style={{
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div style={{ width: "20%", border: "1px solid black" }}>
                <p>{i + 1} Order</p>
                <h3>Total Amount Paid : {order.price}/-</h3>
              </div>
              <div
                style={{
                  width: "70%",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                {order.products.map((product) => (
                  <div
                    style={{
                      border: "1px solid black",
                      width: "23%",
                      height: "250px",
                    }}
                    onClick={() => router(`/single-product/${product._id}`)}
                  >
                    <img
                      style={{ height: "80%", width: "100%" }}
                      src={product.image}
                    />
                    <p>{product.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
