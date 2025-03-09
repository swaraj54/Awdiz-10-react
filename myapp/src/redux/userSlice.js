import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: null },
  reducers: {
    login: (state, action) => {
      console.log(action, "action");
      localStorage.setItem("token", JSON.stringify(action.payload));
      state.token = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      alert("Logout successfull.");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
