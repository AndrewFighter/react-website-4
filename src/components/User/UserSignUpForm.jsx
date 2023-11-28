import React from 'react';
import styles from './../../styles/User.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';
import { toggleFormType } from '../../features/user/userSlice';


const UserSignUpForm = ({ closeForm }) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        password: '',
        name: '',
        avatar: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const isNotEmpty = Object.values(values).every(val => val);
        if (!isNotEmpty) return;
        dispatch(createUser(values));
        closeForm();
    }

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
                </svg>
            </div>

            <div className={styles.title}>Sign Up</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input type="email" placeholder='Your email' name="email" autoComplete='off' value={values.email} onChange={handleChange} required />
                </div>
                <div className={styles.group}>
                    <input type="password" placeholder='Your password' name="password" autoComplete='off' value={values.password} onChange={handleChange} required />
                </div>
                <div className={styles.group}>
                    <input type="text" placeholder='Your name' name="name" autoComplete='off' value={values.name} onChange={handleChange} required />
                </div>
                <div className={styles.group}>
                    <input type="text" placeholder='Your avatar' name="avatar" autoComplete='off' value={values.avatar} onChange={handleChange} required />
                </div>
                <div className={styles.link} onClick={() => {dispatch(toggleFormType('login'))}} >I already have an account</div>
                <button type='submit' className={styles.submit}>Create an account</button>
            </form>
        </div>

    )
}

export default UserSignUpForm