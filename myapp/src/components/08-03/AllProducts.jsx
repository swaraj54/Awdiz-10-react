import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AllProducts = () => {
  const router = useNavigate();
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    if (token == null) {
      alert("Please login to access page.");
      router("/fake-login");
    }
  }, [token]);
  return <div>AllProducts</div>;
};

export default AllProducts;
