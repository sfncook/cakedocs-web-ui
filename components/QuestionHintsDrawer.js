import React, {useState} from 'react';
import styles from '@/styles/QuestionHintsDrawer.module.css'
import PillButton from "@/components/PillButton";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function QuestionHintsDrawer ({

}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const icon = isOpen ? <FaRegArrowAltCircleDown /> : <FaRegArrowAltCircleUp />

    return (
      <div className={`${styles.drawerContainer} ${isOpen && styles.open} ${!isOpen && styles.closed}`}>
        <button className={styles.toggleButton} onClick={toggleOpen}>
          {icon}
          <span className={styles.toggleButtonTxt}>Ice Breakers</span>
        </button>
          <div className={styles.drawerContent}>
            <PillButton text="Describe the system architecture." />
            <PillButton text="How well written is the software?" />
            <PillButton text="What does this application do?" />
          </div>
      </div>
    );
};
