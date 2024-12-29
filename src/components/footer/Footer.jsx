import React from 'react'
import styles from './Footer.module.scss'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.p}>
                        <p>Copyright ©2024 All rights reserved | This template is made with ❤️ by <span>Colorlib</span> </p>
                    </div>
                    <div className={styles.icon}>
                        <a href=""><AiFillTwitterCircle />
                        </a>
                        <a href=""><FaFacebook />
                        </a>
                        <a href=""><TbWorld />
                        </a>
                        <a href=""><FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer