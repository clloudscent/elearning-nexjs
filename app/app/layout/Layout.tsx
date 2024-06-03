// app/layout/Layout.tsx
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

// @ts-ignore
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
