import React from 'react';
import styles from './../../styles/User.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, toggleFormType } from '../../features/user/userSlice';


const UserSignUpForm = ({ closeForm }) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const isNotEmpty = Object.values(values).every(val => val);
        if (!isNotEmpty) return;
        dispatch(loginUser(values));
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

            <div className={styles.title}>Log In</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input type="email" placeholder='Your email' name="email" autoComplete='off' value={values.email} onChange={handleChange} required />
                </div>
                <div className={styles.group}>
                    <input type="password" placeholder='Your password' name="password" autoComplete='off' value={values.password} onChange={handleChange} required />
                </div>
                <div className={styles.link} onClick={() => {dispatch(toggleFormType('signup'))}}>Create an account</div>
                <button type='submit' className={styles.submit}>Login In</button>
            </form>
        </div>

    )
}

export default UserSignUpForm