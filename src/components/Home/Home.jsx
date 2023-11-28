import React, { useEffect } from 'react';
import { filter} from '../../features/products/productsSlice';
import Products from './../Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import Categories from './../Categories/Categories';
import Banner from '../Banner/Banner';



const Home = () => {
  const { products: { list, filtered }, categories } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!list.length) return
    dispatch(filter(100));
  }, [dispatch,list.length])
  return (
    <div>

      <Products amount={5} title='Trending' products={list} />
      <Categories amount={5} title='Worth seeing' products={categories.list} />
      <Banner />
      <Products amount={5} title='Less than 100$' products={filtered} />
    </div>
  )
}

export default Home