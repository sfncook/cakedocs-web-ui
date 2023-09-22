import React from 'react';
import styles from '@/styles/PillButton.module.css'

export default function PillButton ({ text }) {

    return (
      <button className={styles.pillButton}>{text}</button>
    );
};
