import React from 'react';
import styles from './Options.module.css';

function Options({ feedbacks, setFeedbacks }) {
  const updateFeedback = (feedbackType) => {
    setFeedbacks(prevFeedbacks => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1
    }));
  };

  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
    </div>
  );
}

export default Options;
