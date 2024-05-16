import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./status";

export const fetchProducts = createAsyncThunk<Product[], void>(
    'product/fetchProducts',
    async () =>{
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        return response.data.slice(0, 10);
});

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: {
        id: number;
        name: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
}

export interface InitialState {
    status: string;
    products: Product[];
    shoppingCart: Product[];
}


const productSlice = createSlice({
    name:'product',
    initialState: {
        status: IDLE, 
        products: [],
        shoppingCart: [], 
    } as InitialState,
    //imer
    reducers:{
        addProducts: (state, action) => {
            state.shoppingCart.push(action.payload);
        },
        removeProduct: (state,action) => {
            state.shoppingCart = state.shoppingCart.filter(product => product.id !== action.payload);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending,(state,action) =>{
                console.log("pending",action)
                state.status = LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state,action) =>{
                console.log("fulfilled",action)
                state.products = action.payload;
                state.status = SUCCEEDED;
            })
            .addCase(fetchProducts.rejected, (state,action) =>{
                console.log("rejected",action)
                state.status = FAILED;
            })
    }
});

export const {addProducts,removeProduct} = productSlice.actions;
const { reducer: productsReducer } = productSlice;
export default productsReducer;