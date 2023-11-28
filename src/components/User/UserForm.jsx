import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSignUpForm from './UserSignUpForm';
import styles from './../../styles/User.module.css';
import { toggleForm } from '../../features/user/userSlice';
import LoginUserForm from './/LoginUserForm';

const UserForm = () => {
    const { showForm,formType } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const closeForm = () => {
        dispatch(toggleForm(false));
    }
    return (
        showForm ? <div>
            <div className={styles.overlay} onClick={closeForm}></div>
            {formType == 'signup' ? <UserSignUpForm closeForm={closeForm} /> :
                <LoginUserForm closeForm={closeForm} />}
        </div> : <div></div>

    )
}

export default UserForm