import styles from '@/styles/ChatMessages.module.css'

export default function ChatMessage ({ msg, role }) {

  let className_ = styles.chatMessage
  if(role === 'SYSTEM') {
    className_ = styles.chatMessageSystem
  } else if(role === 'USER') {
    className_ = styles.chatMessageUser
  } else if(role === 'ASSISTANT') {
    className_ = styles.chatMessageAssistant
  }

  return (
    <div className={`${styles.chatMessage} ${className_}`}>
      {msg}
    </div>
  );
};
