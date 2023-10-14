import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    // Calculate age based on the input DOB (date of birth)
    const inputDate = new Date(dob);
    const currentDate = new Date();
    const ageDiff = currentDate - inputDate;
    const calculatedAge = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        placeholder="Enter your DOB"
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>You are {age} years old!</p>}
    </div>
  );
};

export default AgeCalculator;