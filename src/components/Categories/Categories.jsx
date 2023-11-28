import React from 'react';
import {Routes} from './../../utils/Routes';
import styles from './../../styles/Categories.module.css';
import { Link } from 'react-router-dom';

const Categories = ({ title, products = [], amount }) => {
    const List = products.filter((_, i) => i < amount)

    return (
        <section className={styles.section}>
            {title && <h2 style={{ marginBottom: '20px' }}>{title}</h2>}
            <div className={styles.list} style={{ display: 'flex', gap: '20px' }}>
                {List.map(({ id, name, image}) => {
                    return (
                        <Link key={id} to={`${Routes.CATEGORIES}/${id}`} className={styles.item}>
                            <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
                            </div>
                            <h3 className={styles.title}>{name}</h3>
                        </Link>
                
                    )
                })

                }
            </div>
        </section>
    )
}

export default Categories