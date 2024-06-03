import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>Logged in as: User</div>
            <div><a href="#">Logout</a></div>
        </header>
    );
};

export default Header;
