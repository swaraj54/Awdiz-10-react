import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProducts, setSingleProducts] = useState({});

  async function getSingleProductData() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data, "response for single product");
      setSingleProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ border: "1px solid black", width: "47%", height: "450px" }}>
        <img
          src={singleProducts.image}
          style={{
            width: "90%",
            margin: "auto",
            height: "90%",
            marginTop: "5%",
          }}
        />
      </div>
      <div style={{ border: "1px solid black", width: "47%", height: "450px" }}>
        <h1>{singleProducts.title}</h1>
        <h3>${singleProducts.price}/-</h3>
      </div>
    </div>
  );
};

export default SingleProduct;
