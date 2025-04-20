import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductFromDb = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(productData, "productData");
  const getSingleProductData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/product//single-product-data",
        { productId: id }
      );
      if (response.data.success) {
        setProductData(response.data.productData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
        <div>
          <h3>{productData?.name}</h3>
          <h3>Seller Name: {productData?.userId?.name}</h3>
          <img src={productData?.image} />
        </div>
      )}
    </div>
  );
};

export default SingleProductFromDb;
