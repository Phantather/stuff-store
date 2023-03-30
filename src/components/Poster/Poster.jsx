import React from 'react';

import styles from '../../styles/Home.module.css'

import Bg from '../../images/computer.png'

const Poster = () => {
    return (
        <section className={styles.home}>
            <div className={styles.title}>
                Bid Sale
            </div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>
                        The bestseller of 2023
                    </div>
                    <h1 className={styles.head}>
                        LENION e2d2 with NVIDIA 5090 TI
                    </h1>
                    <div>
                        <button>
                            Shop now
                        </button>
                    </div>

                </div>
                <div className={styles.image}>
                    <img src={Bg} alt="bg"/>
                </div>
            </div>
        </section>
    );
};

export default Poster;