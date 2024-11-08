import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const ExamInstructions = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const startExam = () => {
    navigate('/exam'); // Use navigate instead of history.push
  };

  return (
    <div className="exam-instructions p-4 max-w-lg mx-auto bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Exam Instructions</h1>
      <p className="mb-4">The exam consists of multiple-choice questions.</p>
      <ul className="list-disc text-left pl-5 mb-4">
        <li>Answer each question within 7 seconds.</li>
        <li>If you don't know the answer, click "I don't know".</li>
        <li>Ensure you are in a quiet environment and your headphones work well.</li>
      </ul>
      <button
        onClick={startExam}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Start Exam
      </button>
    </div>
  );
};

export default ExamInstructions;
