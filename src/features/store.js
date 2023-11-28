import { configureStore} from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import productsSlice from './products/productsSlice';
import {apiSlice} from './api/apiSlice';
import userSlice from './user/userSlice'



const store = configureStore({
    reducer:{
        categories: categoriesSlice,
        products:productsSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
        user:userSlice
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    

});
    


export default store;