import React, { useState } from 'react';

const quizQuestions = [
    { question: "1+1은?", answer: "2" },
    { question: "다음 중 가장 큰 수는?", answer: "100", options: ["10", "100", "50"] }
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Array<boolean>>([]);
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (option: string) => {
        if (option === quizQuestions[currentQuestionIndex].answer) {
            setUserAnswers(prev => [...prev, true]);
        } else {
            setUserAnswers(prev => [...prev, false]);
        }

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const currentOptions = quizQuestions[currentQuestionIndex].options || [];

    return (
        <div>
            {showResults ? (
                <div>
                    <h2>퀴즈 결과</h2>
                    <p>정답 수: {userAnswers.filter(Boolean).length} / {quizQuestions.length}</p>
                </div>
            ) : (
                <div>
                    <h2>{quizQuestions[currentQuestionIndex].question}</h2>
                    {currentOptions.map(option => (
                        <button key={option} onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;
