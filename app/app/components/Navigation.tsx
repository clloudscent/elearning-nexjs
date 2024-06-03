import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>메뉴 1</li>
                <li>메뉴 2</li>
                <li className={styles.active}>이러닝</li>
            </ul>
        </nav>
    );
};

export default Navigation;
