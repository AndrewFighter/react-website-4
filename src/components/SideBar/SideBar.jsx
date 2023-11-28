import React from 'react';
import styles from './../../styles/Sidebar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Poster from '../Poster/Poster';


const SideBar = () => {
  const { list } = useSelector(state => state.categories);
  return (
    <div style={{display:'flex'}}>
      <div className={styles.sidebar} style={{ display: 'flex' }}>
        <div className={styles.title}>Categories</div>
        <nav>
          <ul className={styles.menu}>
            {list.map(({ id, name }) => {
              return <li key={id}>
                {id < 6 && <NavLink to={`/categories/${id}`} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} >{name}</NavLink>}
              </li>
            })}
          </ul>
        </nav>
        <div className={styles.footer}>
          <Link to={'/help'} className={styles.link}>help</Link>
          <Link to={'/terms'} className={styles.link} style={{ textDecoration: 'underline' }}>terms&conditions</Link>
        </div>
      </div>
      <Poster />
    </div>
  )
}

export default SideBar