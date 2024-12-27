import React from 'react';
import styles from './Feedback.module.css';

function Feedback({ good, neutral, bad, totalFeedback }) {
  const positivePercentage = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return totalFeedback > 0 ? (
    <div className={styles.feedback}>
      <h2>Feedback Statistics:</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedbacks: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  ) : (
    <p>No feedback collected yet.</p>
  );
}

export default Feedback;
