import React from 'react'
import styles from './Frobes.module.scss'

const Frobes = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.carts}>
                    <div className={styles.cart}>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand2.png" alt="sss" />
                    </div>
                    <div className={styles.cart}>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand3.png" alt="sss" />
                    </div>
                    <div className={styles.cart}>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand4.png" alt="sss" />
                    </div>
                    <div className={styles.cart}>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand5.png" alt="ss" />
                    </div>
                        <div className={styles.cart}>
                            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand2.png" alt="sss" />
                        </div>
                </div>
            </div>
        </>
    )
}

export default Frobes