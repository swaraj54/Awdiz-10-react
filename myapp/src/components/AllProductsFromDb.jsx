import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

const AllProductsFromDb = () => {
  const router = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(products, "products");
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/product/all-products");
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
    getAllProducts();
  }, []);
  return (
    <div>
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

export default AllProductsFromDb;
