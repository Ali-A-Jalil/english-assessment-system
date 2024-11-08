import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl mb-4">Welcome to English Level Assessment</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-2 hover:bg-blue-700"
        onClick={() => navigate('/old-student')}
      >
        Old Student
      </button>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        onClick={() => navigate('/new-student')}
      >
        New Student
      </button>
    </div>
  );
};

export default HomePage;
