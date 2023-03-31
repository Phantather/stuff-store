import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

import styles from '../../styles/Footer.module.css'

import Logo from "../../images/logo.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={Logo} alt="Stuff"/>
                </Link>
            </div>
            <div className={styles.rights}>
                Developed By Phanti
            </div>
            <div className={styles.socials}>
                <a href="/">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
                </a>
                <a href="/">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                    </svg>
                </a>
                <a href="/">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;