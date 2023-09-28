import React, {useState} from 'react';
import styles from '@/styles/Drawer.module.css'

export default function Drawer ({ }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
      <div className={`${styles.drawerContainer} ${isOpen && styles.open} ${!isOpen && styles.closed}`}>
        <button className={styles.toggleButton} onClick={toggleOpen}>
          <span className={styles.arrowIcon}>↑</span>
        </button>
          <div className={styles.drawerContent}>
              <p>Your drawer content goes here.</p>
              <h2>Hello world!</h2>
              <div>I'm content!</div>
          </div>
      </div>
    );
};
