import React, { useState, useEffect } from 'react';
import Description from './description/Description';
import Options from './options/Options';
import Feedback from './feedback/Feedback';
import Notification from './notification/Notification';
import data from '../data.json';
import items from '../items.json';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  // Синхронизация состояния feedback с localStorage
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  // Функция для обновления данных
  const handleFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  // Функция для сброса всех данных
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Расчет процента положительных отзывов
  const positivePercentage = totalFeedback > 0 
    ? Math.floor((feedback.good / totalFeedback) * 100) 
    : 0;

  return (
    <div>
      <Description header={data.descriptionData} />
      <Options
        items={items}
        handleFeedback={handleFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      
      {/* Условный рендеринг: если totalFeedback > 0, отображаем Feedback, иначе Notification */}
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification /> // Показываем компонент Notification, если нет отзывов
      )}
    </div>
  );
}

export default App;
