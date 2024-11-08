import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OldStudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    level: '',
    teacher: '',
    days: '',
    time: ''
  });
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic here
    navigate('/exam-instructions'); // Use navigate instead of history.push
  };

  return (
    <div className="old-student-form max-w-lg mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">Old Student Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Level</option>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>Level {num + 1}</option>
          ))}
        </select>
        <select
          name="teacher"
          value={formData.teacher}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Teacher</option>
          {/* Populate with actual teacher names */}
          <option value="Teacher1">Teacher 1</option>
          <option value="Teacher2">Teacher 2</option>
        </select>
        <select
          name="days"
          value={formData.days}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Days</option>
          <option value="Sat-Tue">Saturday - Tuesday</option>
          <option value="Sun-Wed">Sunday - Wednesday</option>
          <option value="Mon-Thu">Monday - Thursday</option>
          <option value="Mon-Thu">Private Level</option>
        </select>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Continue to Exam
        </button>
      </form>
    </div>
  );
};

export default OldStudentForm;
