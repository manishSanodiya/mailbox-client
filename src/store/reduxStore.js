import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import mailReducer from "./mail-slice";

//,theme: themeReducer
const store = configureStore({
    reducer: { login: loginReducer,mail: mailReducer},
  });
  
  export default store;