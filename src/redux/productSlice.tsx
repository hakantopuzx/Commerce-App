import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productStatus: STATUS.IDLE as keyof typeof STATUS,
    productDetail: [],
    productDetailStatus: STATUS.IDLE as keyof typeof STATUS,
}

export const getProduct = createAsyncThunk('getProducts', async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    return data;
})

export const getDetailProduct = createAsyncThunk('getProduct', async (id: any) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
})

export const getCategoryProduct = createAsyncThunk('getCategoryProducts', async (category: any) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = response.json();
    return data;
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.productStatus = STATUS.LOADING;
        })
        builder.addCase(getProduct.rejected, (state) => {
            state.productStatus = STATUS.FAIL;
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCESS;
            state.products = action.payload
        })
        builder.addCase(getCategoryProduct.pending, (state) => {
            state.productStatus = STATUS.LOADING;
        })
        builder.addCase(getCategoryProduct.rejected, (state) => {
            state.productStatus = STATUS.FAIL;
        })
        builder.addCase(getCategoryProduct.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCESS;
            state.products = action.payload
        })
        builder.addCase(getDetailProduct.pending, (state) => {
            state.productDetailStatus = STATUS.LOADING;
        })
        builder.addCase(getDetailProduct.rejected, (state) => {
            state.productDetailStatus = STATUS.FAIL;
        })
        builder.addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productDetailStatus = STATUS.SUCCESS;
            state.productDetail = action.payload
        })
    }
})

export default productSlice.reducer;