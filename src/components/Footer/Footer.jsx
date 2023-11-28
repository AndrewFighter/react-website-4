import React from 'react';
import styles from './../../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import LOGO from './../../images/logo.svg';
import { Routes } from './../../utils/Routes'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="logo">
                <Link to={Routes.HOME}>
                    <img src={LOGO} alt="Stuff" />
                </Link>

            </div>
            <div className={styles.rights}>
                Developed by <Link to={'https://www.youtube.com/watch'} target='_blank' rel='noreferrer'>Myckulych</Link>
            </div>
            <div className={styles.socials}>
                <Link to={'https://www.instagram.com/'} target='_blank' rel='noreferrer'>
                    <svg className={styles.icon}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}></use>
                    </svg>
                </Link>
                <Link to={'https://www.facebook.com/'} target='_blank' rel='noreferrer'>
                    <svg className={styles.icon}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}></use>
                    </svg>
                </Link>
                <Link to={'https://www.youtube.com/watch'} target='_blank' rel='noreferrer'>
                    <svg className={styles.icon}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}></use>
                    </svg>
                </Link>



            </div>
        </footer>
    )
}

export default Footer