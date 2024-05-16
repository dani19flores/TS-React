import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../state/products.slice";

const store = configureStore({
    reducer:{
        products:productReducer,
    }
});

export default store;
