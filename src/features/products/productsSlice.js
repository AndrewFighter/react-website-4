import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { shuffle } from "../../utils/common";

export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkApi) => {
    try {
        const res = await axios(`${BASE_URL}/products`);
        return res.data

    } catch (err) {
        return thunkApi.rejectWithValue(err)
    }

});

const initialState = {
    list: [],
    filtered: [],
    related:[],
    isLoading: false
}
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filter: (state, { payload }) => {
            state.filtered = state.list.filter(({ price }) => {
                return price < payload
            })
        },
        relate:(state,{payload}) => {
            const list = state.list.filter(( {category:{id}} ) => {
                return id === payload;
            })
            state.related = shuffle(list);

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;

        })
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;

        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;

        })
    }

})

export const  {filter,relate} = productsSlice.actions;
export default productsSlice.reducer;