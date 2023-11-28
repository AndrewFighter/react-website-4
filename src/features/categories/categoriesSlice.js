import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from 'axios';

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkApi) => {
    try {
        const res = await axios(`${BASE_URL}/categories`);
        return res.data;
    } catch (err) {
    return thunkApi.rejectWithValue(err);
    }
})

const initialState = {
    list: [],
    isLoading: false
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            state.isLoading = true;
        })
            builder.addCase(getCategories.fulfilled, (state, { payload }) => {
                state.list = payload
                state.isLoading = false;
            })

            builder.addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
            })

    }
})

export default categoriesSlice.reducer