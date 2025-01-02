import React from "react";
import css from './Description.module.css';

function Description({ header: { topic, text }  }) {
  return (
    <header className={css.header}>
      <h1>{topic}</h1>
      <p>{text}</p>
    </header>
  );
};

export default Description;
