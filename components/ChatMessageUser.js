import styles from '@/styles/ChatMessages.module.css'

export default function ChatMessageUser ({ msg }) {
  return (
    <div className={`${styles.chatMessage} ${styles.chatMessageUser}`}>
      {msg}
    </div>
  );
};