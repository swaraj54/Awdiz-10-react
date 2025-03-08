import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice.js";
import userReducer from "./userSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // theme: themeReducer,
    user: userReducer,
  },
});

export default store;
