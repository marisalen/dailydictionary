import React, { useState, useEffect } from "react";
import styles from '@/styles/Word.module.css'

const data = require("/data/words.json");

export default function Words(){

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * 100) + 1;
    setSelectedIndex(randomIndex);
  };

  return ( 
<div className={styles.main}>

<img className={styles.leftImg} src="/erosionGlitch.jpg"/>
<img className={styles.rightImg} src="/erosionGlitch.jpg"/>
<div className={styles.mainContainer}>
    <div>
    <h1>Learn a new word with</h1>
    <h2>daily-dictionary.</h2>
        <div className={styles.wordContainer}>
            {data.words.map((word, index) => {
                if (selectedIndex === word.id) {
                    return (
                        <>
                            <h3>{word.word.toLowerCase()}●</h3>
                            <p>{word.definition}</p>
                        </>
                    );
                } else {
                    return null;
                }
            })}
        </div>        
        <button className={styles.button} onClick={handleButtonClick}>
           NEW WORD
        </button>
    </div>
</div>  
</div>
  );
};   

