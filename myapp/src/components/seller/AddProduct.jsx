import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "electronics",
    image: "",
  });
  const router = useNavigate();
  const userData = useSelector((state) => state.user.user);

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleChangeCategory = (event) => {
    console.log(event.target.value, "event.target.value ");
    setProductData({ ...productData, ["category"]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        productData.name &&
        productData.price &&
        productData.quantity &&
        productData.category &&
        productData.image
      ) {
        const response = await axios.post(
          "http://localhost:8000/api/v1/product/add-product",
          {
            productData,
            userId: userData.userId,
          }
        );
        if (response.data.success === true) {
          toast.success(response.data.message);
          setProductData({
            name: "",
            price: "",
            quantity: "",
            category: "",
            image: "",
          });
          //   router("/login");
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("All fields are required.");
      }
    } catch (error) {
      console.log(error, "error while submitting register.");
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    if (userData && userData?.role != "seller") {
      toast.error("You dont have access for this page.");
      router("/");
    }
  }, [userData]);
  return (
    <div>
      <h1>AddProduct</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name : </label>
        <br />
        <input
          type="text"
          value={productData.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <label>Product Price : </label>
        <br />
        <input
          type="number"
          value={productData.price}
          onChange={handleChange}
          name="price"
        />
        <br />
        <label>Total Quantity : </label>
        <br />
        <input
          type="number"
          value={productData.quantity}
          onChange={handleChange}
          name="quantity"
        />
        <br />
        <label>Category : </label>
        <br />
        <select onChange={handleChangeCategory}>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="footwear">Footwear</option>
        </select>
        <br />
        <label>Product Image url : </label>
        <br />
        <input
          type="url"
          value={productData.image}
          onChange={handleChange}
          name="image"
        />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default AddProduct;
