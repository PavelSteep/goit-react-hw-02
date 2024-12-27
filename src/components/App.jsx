import React, { useState } from 'react';
import Feedback from './feedback/Feedback';
import Options from './options/Options';

function App() {
  // Состояния для каждого типа отзыва
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Общая сумма отзывов
  const totalFeedback = good + neutral + bad;

  // Функция для сброса всех состояний
  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options 
        setGood={setGood} 
        setNeutral={setNeutral} 
        setBad={setBad} 
        resetFeedback={resetFeedback} 
        totalFeedback={totalFeedback} 
      />
      <Feedback good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} />
    </div>
  );
}

export default App;
