import React from 'react';
import styles from '@/styles/QueryInput.module.css'
import Image from 'next/image'

export default function QueryInput ({  }) {

    return (
      <div className={styles.queryInputContainer}>
        <input type="text" className={styles.textInput} placeholder="Enter text..."/>
        <button className={styles.submitBtn}>
          <Image
            src="/submit.png"
            alt="Submit"
            width={10}
            height={10}
            priority
          />
        </button>
      </div>
    );
};
