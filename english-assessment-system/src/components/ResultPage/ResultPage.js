import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResultPage = ({ score, totalQuestions, studentType, currentLevel, retriesLeft }) => {
  const navigate = useNavigate();
  const percentage = (score / totalQuestions) * 100;
  const hasPassed = score >= 80;
  const [remainingRetries, setRemainingRetries] = useState(retriesLeft || 3);

  const handleRetry = () => {
    if (remainingRetries > 0) {
      setRemainingRetries((prevRetries) => prevRetries - 1);
      navigate('/exam');
    }
  };

  return (
    <div className="result-page p-4 max-w-lg mx-auto bg-white rounded shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4">Exam Results</h1>
      <p className="mb-4">
        Your Score: {score}/{totalQuestions} ({percentage.toFixed(2)}%)
      </p>

      {studentType === 'new' ? (
        <div>
          <p className="text-blue-600 font-bold mb-4">
            Your Level: {Math.ceil((percentage / 100) * 10)}
          </p>
          <p className="text-green-600 font-bold mb-4">Your Score: {percentage.toFixed(2)}%</p>
        </div>
      ) : hasPassed ? (
        <div>
          <p className="text-green-600 font-bold mb-4">
            Congratulations! You passed your level and will proceed to the next level. Please contact the staff for further instructions.
          </p>
        </div>
      ) : remainingRetries > 0 ? (
        <div>
          <p className="text-red-600 font-bold mb-4">Unfortunately, you did not pass.</p>
          <p className="mb-4">You have {remainingRetries} retries left.</p>
          <button
            onClick={handleRetry}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700"
          >
            Retry Exam
          </button>
        </div>
      ) : (
        <div>
          <p className="text-red-600 font-bold mb-4">You have used all your retries. Please contact the staff for further assistance.</p>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
