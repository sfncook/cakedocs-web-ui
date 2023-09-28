import React, {useState} from 'react';
import styles from '@/styles/Drawer.module.css'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function Drawer ({ content, title, isOpen, handleOpen, handleClose }) {

    const toggleOpen = () => {
      if (isOpen) {
        handleClose()
      } else {
        handleOpen()
      }
    }

    const icon = isOpen ? <FaRegArrowAltCircleDown /> : <FaRegArrowAltCircleUp />

    return (
      <div className={`${styles.drawerContainer} ${isOpen && styles.open} ${!isOpen && styles.closed}`}>
        <button className={styles.toggleButton} onClick={toggleOpen}>
          {icon}
          <span className={styles.toggleButtonTxt}>{title}</span>
        </button>
        {content}
      </div>
    );
};
