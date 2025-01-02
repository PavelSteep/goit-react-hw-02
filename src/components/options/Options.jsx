import React from "react";
import css from './Options.module.css';

function Options({ items, handleFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={css.container}>
      {items.map((item) => (
        <button
          key={item.id}
          className={css.button}
          onClick={() => handleFeedback(item.type)}
        >
          {item.label}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={css.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
