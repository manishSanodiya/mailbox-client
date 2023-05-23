import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";

//,theme: themeReducer
const store = configureStore({
    reducer: { login: loginReducer},
  });
  
  export default store;