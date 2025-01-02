import React from 'react';
import Notification from '../notification/Notification';

function Feedback({ good, neutral, bad, totalFeedback, positivePercentage }) {
  if (totalFeedback === 0) {
    return <Notification />;
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
