import React from 'react';
import styles from './Feedback.module.css';

function Feedback({ feedbacks }) {
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  return totalFeedback > 0 ? (
    <div className={styles.feedback}>
      <h2>Feedback Statistics:</h2>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total feedbacks: {totalFeedback}</p>
    </div>
  ) : null;
}

export default Feedback;
