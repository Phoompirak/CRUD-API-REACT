import React from 'react'
import { MdProductionQuantityLimits } from "react-icons/md";
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className={styles.container}>
                    <div className={styles.icon}>
                        <MdProductionQuantityLimits />
                    </div>
                    <div className={styles.list_items}>
                        <li className={styles.item}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to={'/favorite'}>Favorite</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to={'/aboutme'}>About me</Link>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
