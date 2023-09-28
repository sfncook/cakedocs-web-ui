import styles from '@/styles/ChatMessages.module.css'
import { FaCoins } from 'react-icons/fa';

export default function UsageIndicator ({ usage }) {
  return (
    <div className={styles.usageIndicatorContainer}>
      <a href='https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' target='_blank' style={{display:"flex",flexDirection:"row"}}>
        <FaCoins />
        <div className={styles.usageIndicatorText}>
          {usage.total_tokens}
        </div>
      </a>
    </div>
  );
};