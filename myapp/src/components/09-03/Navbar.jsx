import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Navbar = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const tokenInRedux = useSelector((state) => state.user.token);
  const userData = useSelector((state) => state.user.user);
  console.log(userData, "userData");
  return (
    <div
      style={{
        height: "70px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h1 onClick={() => router("/")} style={{ cursor: "pointer" }}>
        Home
      </h1>
      {/* <h1 onClick={() => router("/all-products")} style={{ cursor: "pointer" }}>
        Products
      </h1> */}
      {userData?.role == "seller" && (
        <>
          <h1
            onClick={() => {
              router("/add-product");
            }}
          >
            Add Product
          </h1>
          <h1
            onClick={() => {
              router("/added-products");
            }}
          >
            Your Added Products
          </h1>
        </>
      )}
      {userData?.role == "user" && (
        <>
          <h1
            onClick={() => {
              router("/all-products");
            }}
          >
            All Products
          </h1>
          <h1
            onClick={() => {
              router("/order-history");
            }}
          >
            Order history
          </h1>
          <h1
            onClick={() => {
              router("/cart");
            }}
          >
            Cart
          </h1>
        </>
      )}
      {!userData ? (
        <h1 onClick={() => router("/login")} style={{ cursor: "pointer" }}>
          Login
        </h1>
      ) : (
        <h1 onClick={() => dispatch(logout())} style={{ cursor: "pointer" }}>
          Hi {userData?.name} : {userData?.role}, Logout?
        </h1>
      )}
    </div>
  );
};

export default Navbar;
