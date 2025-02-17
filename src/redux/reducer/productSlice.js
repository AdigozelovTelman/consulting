import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


    export const getProductsThunk = createAsyncThunk('api/products', async ()=>{
        const response = await axios.get('https://dummyjson.com/products')
        console.log(response);

        return response.data.products
    })

    export const postProductsWishThunk = createAsyncThunk('api/products/basket', async (data) =>{
    const response = await axios.post('http://localhost:3000/wishlist',data)
    return data
    })

    export const postProductsBasketThunk = createAsyncThunk ('api/products/basket',async (data) => {
        const response = await axios.post('http://localhost:3000/basket',data)
        return data
    })

    
export const productSlice = createSlice({
    name: 'products',
    initialState:{
        products:[]
    },
    reducers:{},
    extraReducers:builder => {
        builder
        
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getProductsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getProductsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        }) 

        .addCase(postProductsWishThunk.fulfilled, (state) => {
            state.loading = false
        })
        .addCase(postProductsWishThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(postProductsWishThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
       
        
    }
})

export default productSlice.reducer