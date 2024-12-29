import React from 'react'
import styles from './Team.module.scss'

const Team = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.head}>
                    <p>----- Our Professional members</p>
                    <h2>Our Team Mambers</h2>
                </div>
                <div className={styles.carts}>
                    <div className={styles.cart}>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png" alt="hero2" />
                        <div className={styles.text}>
                            <span>Ethan Welch</span>
                            <p>----  UX Designer</p>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png" alt="hero3" />
                        <div className={styles.text}>
                            <span>Ethan Welch</span>
                            <p>----  UX Designer</p>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png" alt="hero4" />
                        <div className={styles.text}>
                            <span>Ethan Welch</span>
                            <p>----  UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Team