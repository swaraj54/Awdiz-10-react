import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

const AddedProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products, "products");
  const router = useNavigate();
  const userData = useSelector((state) => state.user.user);
  const getAddedProducts = async () => {
    if (userData?.userId && userData?.role == "seller") {
      try {
        // const response = await axios.post(
        //   "http://localhost:8000/api/v1/product/added-products",
        //   { userId: userData.userId }
        // );
        const response = await axiosInstance.post("/product/added-products", {
          userId: userData.userId,
        });
        if (response.data.success) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getAddedProducts();
    console.log(!userData, userData && userData?.role != "seller", userData);
    if (userData && userData?.role != "seller") {
      toast.error("You dont have access for this page, please login.");
      //   router("/");
    }
  }, [userData]);
  return (
    <div>
      <h1>Your added products</h1>
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
              }}
            >
              <img
                style={{ width: "100%", height: "220px", borderRadius: "10px" }}
                src={product.image}
              />
              <p style={{ fontSize: "10px" }}>{product.name}</p>
              <p style={{ fontSize: "10px" }}>{product.price}</p>
              <p style={{ fontSize: "10px" }}>{product.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddedProducts;
