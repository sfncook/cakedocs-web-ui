import styles from '@/styles/ChatMessages.module.css'

export default function ChatMessageSystem ({ msg }) {
  return (
    <div className={`${styles.chatMessage} ${styles.chatMessageSystem}`}>
      {msg}
    </div>
  );
};