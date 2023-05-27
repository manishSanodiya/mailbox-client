import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import mailReducer from "./mail-slice";
import showReducer from './show-slice';

//,theme: themeReducer
const store = configureStore({
    reducer: { login: loginReducer,show: showReducer,mail: mailReducer},
  });
  
  export default store;