import React from "react";
import styles from './Options.module.css';

function Options({ items, handleFeedback }) {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <button
          key={item.id}
          className={styles.button}
          onClick={() => handleFeedback(item.type)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default Options;
