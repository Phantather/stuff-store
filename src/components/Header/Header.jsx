import React from 'react';
import {Link} from "react-router-dom";

import styles from '../../styles/Header.module.css'

import {Routes} from "../../utils/routes";

import Logo from '../../images/logo.svg'
import Avatar from '../../images/avatar.jpg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to={Routes.HOME}>
                    <img src={Logo} alt="Stuff"/>
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user}>
                    <div className={styles.avatar} style={{backgroundImage: `url(${Avatar})`}}/>
                    <div className={styles.username}>Guest</div>
                </div>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input type="search"
                               name="search"
                               placeholder="Search for anything"
                               autoComplete="off"
                               onChange={() => {}}
                               value=""
                        />
                    </div>
                    {false && <div className={styles.box}></div>}

                </form>
                <div className={styles.account}>
                    <Link  to={Routes.HOME} className={styles.favourites}>

                            <svg className={styles['icon-fav']}>
                                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                            </svg>

                    </Link>
                    <Link  to={Routes.CART} className={styles.cart}>

                        <svg className={styles['icon-cart']}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                        </svg>
                        <span className={styles.count}>2</span>

                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;