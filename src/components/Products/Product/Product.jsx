import React from 'react';


import styles from "../../../styles/Product.module.css"
const Product = ({images}) => {
   const currentImage = images[0]
    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div className={styles.current} style={{backgroundImage: `url(${currentImage})`}}/>
            </div>
        </section>
    );
};

export default Product;