import React from 'react';
import Home from '../components/Home/Home';
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../components/Products/SingleProduct';
import Cart from '../components/Cart/Cart';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
            </Route >
            <Route path='/products/:id' element={<SingleProduct />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    )
}

export default AppRoutes