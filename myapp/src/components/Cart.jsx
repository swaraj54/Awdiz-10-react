import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  console.log(products, "products");
  const userData = useSelector((state) => state.user.user);

  const getCartProducts = async () => {
    try {
      if (!userData?.userId) {
        return toast.error("Please login to view cart products.");
      }
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/get-cart-products",
        { userId: userData.userId }
      );
      if (response.data.noProductFound) {
        return toast.success("No Products found in cart.");
      }
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userData?.userId) {
      getCartProducts();
    }
  }, [userData]);

  return (
    <div>
      <h1>Cart :</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {products.length > 0 &&
            products.map((product) => (
              <div
                style={{
                  width: "12%",
                  height: "300px",
                  border: "1px solid black",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => router(`/single-product/${product._id}`)}
              >
                <img
                  style={{
                    width: "100%",
                    height: "220px",
                    borderRadius: "10px",
                  }}
                  src={product.image}
                />
                <p style={{ fontSize: "10px" }}>{product.name}</p>
                <p style={{ fontSize: "10px" }}>{product.price}</p>
                <p style={{ fontSize: "10px" }}>{product.category}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
