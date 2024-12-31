import React from "react";
import styles from './Description.module.css'; // Подключаем стили

function Description({ header: { topic, text }  }) {
  return (
    <header className={styles.header}>
      <h1>{topic}</h1>
      <p>{text}</p>
    </header>
  );
};

export default Description;
