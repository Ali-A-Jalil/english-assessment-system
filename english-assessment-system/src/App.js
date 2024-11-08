import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for Routes
import HomePage from './components/HomePage/HomePage';
import OldStudentForm from './components/OldStudentForm/OldStudentForm';
import NewStudentForm from './components/NewStudentForm/NewStudentForm';
import ExamInstructions from './components/ExamInstructions/ExamInstructions';
import ExamPage from './components/ExamPage/ExamPage';
import ResultPage from './components/ResultPage/ResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Updated Switch to Routes */}
          <Route path="/" element={<HomePage />} /> {/* Updated component to element */}
          <Route path="/old-student" element={<OldStudentForm />} />
          <Route path="/new-student" element={<NewStudentForm />} />
          <Route path="/exam-instructions" element={<ExamInstructions />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
