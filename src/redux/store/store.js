import { configureStore } from "@reduxjs/toolkit";
import RowcarReducer from "../slice/Rowcarslice";

const store = configureStore({
      reducer:{
            car:RowcarReducer
      }
})

export default store