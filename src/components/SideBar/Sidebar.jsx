import React from 'react';
import styles from '../../styles/Sidebar.module.css'
import {NavLink} from "react-router-dom";

import {useSelector} from "react-redux";

const Sidebar = () => {

    const {list} = useSelector(({categories}) => categories)


    return (
        <section className={styles.sidebar}>
            <h2 className={styles.title}>Categories</h2>
            <nav>
                <ul className={styles.menu}>
                    {
                        list.map(({id,name}) => (
                            <li key={id}>
                                <NavLink to={`/categories/${id}`}
                                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
            <div className={styles.footer}>
                <a href="/help" className={styles.link}>
                    Help
                </a>
                <a href="/terms" className={styles.link} style={{textDecoration: 'underline'}}>
                    Terms
                </a>
            </div>
        </section>
    );
};

export default Sidebar;