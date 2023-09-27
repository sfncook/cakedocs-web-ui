import styles from '@/styles/ChatMessages.module.css'

export default function ChatMessage ({ msg, role }) {

  let className_ = styles.chatMessage
  if(role === 'system') {
    className_ = styles.chatMessageSystem
  } else if(role === 'user') {
    className_ = styles.chatMessageUser
  } else if(role === 'assistant') {
    className_ = styles.chatMessageAssistant
  }

  return (
    <div className={`${styles.chatMessage} ${className_}`}>
      {msg}
    </div>
  );
};
