import React from 'react';
import styles from './../../styles/Home.module.css';
import banner from './../../images/banner.png';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.left}>
                <p className={styles.content}>
                    New Year
                    <span>Sale</span>
                </p>
                <button className={styles.more}>See more...</button>
            </div>
            <div className={styles.right} style={{ backgroundImage: `url(${banner})` }}>
                <p className={styles.discount}>
                    save up to
                    <span>50%</span> off
                </p>
                
            </div>

        </section>
    )
}

export default Banner