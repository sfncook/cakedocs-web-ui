import React from 'react';
import styles from '@/styles/PillButton.module.css'

export default function PillButton ({ text, onClick }) {

    return (
      <button className={styles.pillButton} onClick={()=>onClick(text)}>{text}</button>
    );
};
