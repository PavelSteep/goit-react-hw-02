import React from 'react';

function Feedback({ good, neutral, bad, totalFeedback, positivePercentage }) {
  if (totalFeedback === 0) {
    return <p>No feedback yet</p>; // Показываем текст, если отзывов пока нет
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
