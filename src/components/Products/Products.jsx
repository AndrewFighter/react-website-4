import React from 'react'
import styles from './../../styles/Products.module.css';
import { Link } from 'react-router-dom';
import { Routes } from './../../utils/Routes';


const Products = ({ title, products = [], amount }) => {
    const List = products.filter((_, i) => i < amount);

    return (
        <section className={styles.products}>
            {title && <h2 style={{marginBottom:'20px'}}>{title}</h2>}
            <div className={styles.list} style={{display:'flex',gap:'20px'}}>
                {List.map(({ id, title, images, category: { name: cat }, price }) => {
                    return <Link key={id} to={`${Routes.PRODUCTS}/${id}`} className={styles.product}>
                        <div className={styles.image} style={{ backgroundImage: `url(${images[0]})` }}>
                        </div>
                        <div className={styles.wrapper}>
                            <h3 className={styles.title}>{title}</h3>
                            <div className={styles.cat}>{cat}</div>
                            <div className={styles.info}>
                                <div className={styles.prices}>
                                    <div className={styles.price}>{price}$</div>
                                    <div className={styles.oldPrice}>{Math.floor(price * 0.8)}$</div>
                                </div>
                                <div className={styles.purchases}>{Math.floor(Math.random * 20 + 1)} purchases</div>
                            </div>
                        </div>
                    </Link>
                })

                }
            </div>
        </section>
    )
}

export default Products