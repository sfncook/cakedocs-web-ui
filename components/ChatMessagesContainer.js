import styles from '@/styles/ChatMessages.module.css'
import ChatMessage from "@/components/ChatMessage";

export default function ChatMessagesContainer ({ msgs, selectedRepo}) {
  const welcomeMsg = selectedRepo ?
    (<span>Welcome to CakeDocs! You are currently chatting with <a href={selectedRepo.repo_url} target="_blank">{selectedRepo.repo_name}</a>.<br/>Please type your questions below.</span>) :
    `Welcome to CakeDocs! Please select a project from the dropdown below to get started.`

  return (
    <div className={styles.chatMessagesContainer}>
      <ChatMessage msg={welcomeMsg} role='SYSTEM' />
      {msgs && msgs.map((msg, index) => (<ChatMessage key={index} msg={msg.msg} role={msg.role} />))}
    </div>
  );
};
