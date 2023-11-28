import React, { useEffect } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import SideBar from './components/SideBar/SideBar';
import { useDispatch } from 'react-redux';
import { getCategories } from './features/categories/categoriesSlice';
import { getProducts} from './features/products/productsSlice';
import './styles/index.css';
import UserForm from './components/User/UserForm';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className='app'>
      <Header />
      <UserForm/>
      <div >
        <SideBar />
        <AppRoutes />
      </div>
      <Footer />
    </div>)



}

export default App;
