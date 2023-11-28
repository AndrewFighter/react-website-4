import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const createUser = createAsyncThunk("user/createUser", async (payload, thunkApi) => {
    try {
        const res = await axios.post(`${BASE_URL}/users`, payload);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})
export const loginUser = createAsyncThunk('user/loginUser', async (payload, thunkApi) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, payload);
        console.log(res)
        const login = await axios(`${BASE_URL}/auth/profile`, {
            headers: {
                Authorization: `Bearer ${res.data.access_token}`
            }
        })
        return login.data;
    } catch (error) {
        console.log(error.message)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        cart: [],
        showForm: false,
        formType: 'signup',
    },
    reducers: {
        addItemToCart: (state, { payload }) => {
            let newCart = [...state.cart];
            const found = newCart.find(({ id }) => {
                return id === payload.id;
            })
            if (found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } : item;
                })
            }
            else {
                newCart.push({ ...payload, quantity: 1 });

            }
            state.cart = newCart
        },
        toggleForm: (state, { payload }) => {
            state.showForm = payload;
        },
        removeItemId: (state, { payload }) => {
            state.cart = state.cart.filter(({ id }) => {
                return id !== payload;
            })
        },
        toggleFormType: (state, { payload }) => {
            state.formType = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, { payload }) => {
            state.currentUser = payload
        })
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.currentUser = payload
        })
    }
})

export const { addItemToCart, toggleForm, removeItemId,toggleFormType } = userSlice.actions;

export default userSlice.reducer;