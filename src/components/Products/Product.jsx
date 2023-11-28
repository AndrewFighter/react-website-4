import React, { useEffect, useState } from 'react';
import styles from '../../styles/Product.module.css';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/Routes';
import { useDispatch} from 'react-redux';
import { addItemToCart } from '../../features/user/userSlice';
import { useSelector } from 'react-redux';

const Product = (item) => {
    const dispatch = useDispatch();
    const { images, title, description, price } = item
    const {cart} = useSelector(state => state.user)
    const SIZES = [4, 4.5, 5, 6];
    const [currentImage, setCurrentImage] = useState();
    const [currentSize, setCurrentSize] = useState();
    const addToCart = () => {
        dispatch(addItemToCart(item));
    }
    useEffect(() => {
        if (!images.length) return;
        setCurrentImage(images[0]);
    }, [images]);
    return (

        <section className={styles.product}>
            <div className={styles.images}>
                <div className={styles.current} style={{ backgroundImage: `url(${currentImage})` }}></div>
            </div>
            <div className={styles['images-list']}>
                {images.map((image, i) => {
                    return <div onClick={() => { setCurrentImage(image) }} className={styles.image} key={i} style={{ backgroundImage: `url(${image})` }}></div>
                })}
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.price}>{price}</div>
                <div className={styles.color}>
                    <span>Color:</span> Green
                </div>
                <div className={styles.sizes}>
                    <span>Sizes:</span>
                    <div className={styles.list}>
                        {SIZES.map((size) => {
                            return <div className={`${styles.size}  ${currentSize === size ? (styles.active) : ''}`} onClick={(e) => { setCurrentSize(size) }} key={size}>{size}</div>
                        })}
                    </div>
                </div>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.actions}>
                <button onClick={() => { addToCart() }} className={styles.add}>Add to Cart</button>
                <button className={styles.favourites}>Add to favourites</button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.purchase}>19 people purchased</div>
                <Link to={Routes.HOME}>return to store</Link>
            </div>
        </section>
    )
}

export default Product