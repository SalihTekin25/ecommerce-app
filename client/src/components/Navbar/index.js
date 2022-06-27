import React from 'react'

import { Link } from "react-router-dom";
import styles from './styles.module.css'
import { Button,  } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">eCommerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Product</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.right}>

                <Link to="/register"><Button colorScheme='teal' variant='outline'>Register</Button></Link>
                <Link to="/login"><Button colorScheme='teal' variant='outline'>Login</Button></Link>

            </div>
        </nav>

    )
}

export default Navbar