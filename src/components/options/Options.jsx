import React from 'react';
import styles from './Options.module.css';

function Options({ setGood, setNeutral, setBad, resetFeedback, totalFeedback }) {
  return (
    <div className={styles.options}>
      <button onClick={() => setGood(prev => prev + 1)}>Good</button>
      <button onClick={() => setNeutral(prev => prev + 1)}>Neutral</button>
      <button onClick={() => setBad(prev => prev + 1)}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
}

export default Options;
