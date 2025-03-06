import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // theme: themeReducer,
    // user: userReducer,
  },
});

export default store;
