import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      console.log(action, "action");
      if (action.payload.token) {
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      }
      state.user = action.payload.user;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      toast.success("Logout Successfull.")
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

// const res = { userData: { user: { name: "Sagar" }, token: "12345jknjk" } };
