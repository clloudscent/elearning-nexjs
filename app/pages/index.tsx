// pages/index.tsx
import React from 'react';
import Quiz from '../app/components/Quiz';

const HomePage = () => {
    return (
        <div>
            <h1>환영합니다! E-Learning 애플리케이션입니다.</h1>
            <Quiz />
        </div>
    );
};

export default HomePage;
