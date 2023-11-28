import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './../../styles/Cart.module.css';
import { sumBy } from '../../utils/common';
import { addItemToCart, removeItemId } from '../../features/user/userSlice';


const Cart = () => {
    const { cart } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const changeQuantity = (item,quantity) => {
        dispatch(addItemToCart({...item,quantity}))
    }
    return (
        <section className={styles.cart}>
            <h2 className={styles.title}>Your Cart</h2>
            {!cart.length ? <div className={styles.empty}>Here is Empty</div>
                : <div className={styles.list}>
                    {cart.map((item) => {
                        const { id, title, images, price, category, quantity } = item;

                        return (
                            <div className={styles.item} key={id}>
                                <div className={styles.image} style={{ backgroundImage: `url(${images[0]})` }}></div>
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{title}$</h3>
                                    <div className={styles.category}>{category.name} </div>
                                </div>
                                <div className={styles.price}>{price}$</div>

                                <div className={styles.quantity}>
                                    <div className={styles.minus}
                                    onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
                                        <svg className={styles.icon}>
                                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}></use>
                                        </svg>
                                    </div>
                                    <span>{quantity}</span>
                                    <div className={styles.plus} onClick={() => changeQuantity(item, quantity + 1)}>
                                        <svg className={styles.icon}>
                                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`} ></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.total}>{price * quantity}</div>

                                <div className={styles.close} onClick={()=>{
                                    dispatch(removeItemId(id));
                                }}>
                                    <svg className={styles.icon}>
                                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}></use>
                                    </svg>
                                </div>
                            </div>
                        )
                    })}
                </div>}
            <div className={styles.action}>
                <div className={styles.total}>TOTAL PRICE : {" "} <span>{sumBy(cart.map(({ quantity, price }) => { return quantity * price }))}</span>
                </div>
            </div>
        </section>
    )
}

export default Cart