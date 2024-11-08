import React, { useState, useEffect } from 'react';

const ExamPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(7);

  const questions = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6', "I don't know"], correct: 1 },
    { question: 'What is the capital of France?', options: ['Rome', 'Madrid', 'Paris', 'Berlin', "I don't know"], correct: 2 },
  ];

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setTimer(7);
  };

  const handleAnswer = (index) => {
    if (index === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  if (currentQuestionIndex >= questions.length) {
    return <div>Exam Completed! Your Score: {score}</div>;
  }

  return (
    <div className="exam-page p-4 max-w-lg mx-auto bg-white rounded shadow-lg">
      <h2 className="text-lg mb-4">Question {currentQuestionIndex + 1}</h2>
      <p className="mb-4">{questions[currentQuestionIndex].question}</p>
      <div className="space-y-2">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="block w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
          >
            {option}
          </button>
        ))}
      </div>
      <p className="text-right mt-4">Time Left: {timer}s</p>
    </div>
  );
};

export default ExamPage;
