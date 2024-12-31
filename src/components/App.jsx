import React, { useState } from 'react';
import Description from './description/Description';
import Options from './options/Options';
import Feedback from './feedback/Feedback';
import data from '../data.json';
import items from '../items.json';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [positivePercentage, setPositivePercentage] = useState(0);

  // Функция для обновления данных
  const handleFeedback = (type) => {
    setFeedback((prev) => {
      const newFeedback = { ...prev, [type]: prev[type] + 1 };

      // Если нажата кнопка "bad", пересчитываем процент
      if (type === 'bad') {
        const totalFeedback = newFeedback.good + newFeedback.neutral + newFeedback.bad;
        const positivePercentage = totalFeedback > 0 ? Math.floor((newFeedback.good / totalFeedback) * 100) : 0;
        setPositivePercentage(positivePercentage);
      }

      return newFeedback;
    });
  };

  // Функция для сброса всех данных
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setPositivePercentage(0); // Сбрасываем процент
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <Description header={data.descriptionData} />
      <Options items={items} handleFeedback={handleFeedback} />
      <Feedback 
        good={feedback.good} 
        neutral={feedback.neutral} 
        bad={feedback.bad} 
        totalFeedback={totalFeedback} 
        positivePercentage={positivePercentage} 
      />
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>} {/* Показываем кнопку Reset только если есть отзывы */}
    </div>
  );
}

export default App;
