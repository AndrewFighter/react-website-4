import React, { useEffect } from 'react'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { Routes } from '../../utils/Routes';
import Product from './Product';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import {relate} from './../../features/products/productsSlice';


const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const {related,list} = useSelector(state => state.products);
    const { data, isLoading, isSuccess, isFetching } = useGetProductQuery({ id });
    useEffect(() => {
        if (!isLoading && !isSuccess && !isFetching) {
            navigate(Routes.HOME);
        }
    }, [isLoading, isSuccess, isFetching]);

    useEffect(() => {
        if (!data || !list.length) return;
        dispatch(relate(data.category.id));
    }, [data]);
    
    return (
        <div>
            {data ? (<div><Product {...data} /> </div>) : (<section className='preloader'>Loading...</section>)}
            <Products amount={5} title='Related' products={related} />
        </div>
    )
}

export default SingleProduct