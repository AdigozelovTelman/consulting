import React from 'react'
import styles from './Header.module.scss'
import { FaRegClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.about}>
                    <div className={styles.clock}>
                        <div className={styles.clockText}>
                            <a href=""><FaRegClock /></a>
                            <p>Mon - SAT: 6.00 am - 10.00 pm</p>
                        </div>
                        <div className={styles.sun}>
                            <span> Sun: Closed</span>
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaLinkedinIn /></a>
                        <a href=""><IoLogoGoogleplus /></a>
                    </div>
                </div>
            </div>

            <div className={styles.header}>
                <div className={styles.consulting}>
                    <div className={styles.logo}>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/loder.jpg" alt="logo" />
                    </div>
                    <div className={styles.navbar}>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="/basket">Basket</a></li>
                                <li><a href="/wishlist">Wishlist</a></li>
                                <li><a href="/formik">Formik</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.hamburger}>
                        <a href="">MENU<RxHamburgerMenu /></a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header