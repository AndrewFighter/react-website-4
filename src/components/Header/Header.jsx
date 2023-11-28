import React, { useState } from 'react';
import styles from './../../styles/Header.module.css';
import LOGO from './../../images/logo.svg';
import AVATAR from './../../images/avatar.jpg';
import { Routes } from './../../utils/Routes';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice';
import { useEffect } from 'react';
import { useGetProductsQuery } from '../../features/api/apiSlice';



const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const [values, setValues] = useState({ name: 'Guest', avatar: `${AVATAR}` })
    const [searchValue, setSearchValue] = useState('');
    
    const handleClick = () => {
        if (!currentUser) dispatch(toggleForm(true))
    }
    const handleSearch = ({ target: { value } }) => {
        setSearchValue(value);
    }
    useEffect(() => {
        if (!currentUser) return;

        setValues(currentUser);
    }, [currentUser]);

    const { data, isLoading } = useGetProductsQuery({ title: searchValue });
    return (
        <div className={styles.header}>

            <div className={styles.info}>
                <div className="logo">
                    <Link to={Routes.HOME}>
                        <img src={LOGO} alt="Stuff" />
                    </Link>

                </div>
                <div className={styles.user} onClick={() => { handleClick() }}>
                    <div className={styles.avatar} style={{ backgroundImage: `url(${values.avatar})` }}></div>
                    <div className={styles.username}>{values.name}</div>
                </div>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className={styles.icon}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}></use>
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input onChange={handleSearch} type="text" name="search" autoComplete='off' placeholder='Searching For Some....' value={searchValue} />
                    </div>

                    {searchValue && <div className={styles.box}>
                        {isLoading ? 'loading...' : !data.length ? 'No results' :

                            data.map(({ id, title, images }) => {
                                return <Link onClick={() => {
                                    setSearchValue('')
                                }} className={styles.item} key={id} to={`/products/${id}`}>
                                    <div className={styles.image} style={{ backgroundImage: `url(${images[0]})` }}></div>
                                    <div className={styles.title}>{title}</div>
                                </Link>
                            })
                        }
                    </div>}

                </form>

                <div className={styles.account}>
                    <Link to={Routes.HOME} className={styles.favourites}>
                        <svg className={styles['icon-fav']}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}></use>
                        </svg>
                    </Link>
                    <Link to={Routes.CART} className={styles.favourites}>
                        <svg className={styles['icon-fav']}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}></use>
                        </svg>
                        <span className={styles.count}>2</span>
                    </Link>
                </div>



            </div>




        </div>
    )
}

export default Header