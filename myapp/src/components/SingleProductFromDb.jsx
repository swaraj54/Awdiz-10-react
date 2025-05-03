import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../axiosConfig";

const SingleProductFromDb = () => {
  const router = useNavigate();
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);
  const [cartButtonLoading, setCartButtonLoading] = useState(false);
  const userData = useSelector((state) => state.user.user);
  console.log(productData, "productData");
  const getSingleProductData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("product/single-product-data", {
        productId: id,
      });
      if (response.data.success) {
        setProductData(response.data.productData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const AddToCart = async () => {
    try {
      if (!userData?.userId) {
        return toast.error("Please login to add product to cart.");
      }
      setCartButtonLoading(true);
      const response = await axiosInstance.post("/user/add-to-cart", {
        productId: id,
        userId: userData.userId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        router("/cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCartButtonLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            height: "100vh",
          }}
        >
          <div
            style={{ width: "48%", height: "80%", border: "1px solid black" }}
          >
            <img
              style={{ width: "70%", height: "100%" }}
              src={productData?.image}
            />
          </div>
          <div
            style={{ width: "48%", height: "80%", border: "1px solid black" }}
          >
            <h3>Product Name: {productData?.name}</h3>
            <h3>Product price: {productData?.price}/-</h3>
            <h3>Seller Name: {productData?.userId?.name}</h3>
            <button disabled={cartButtonLoading} onClick={AddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductFromDb;
