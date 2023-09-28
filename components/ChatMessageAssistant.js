import styles from '@/styles/ChatMessages.module.css'
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import UsageIndicator from "@/components/UsageIndicator";

export default function ChatMessageAssistant ({ msg }) {
  return (
    <div className={`${styles.chatMessage} ${styles.chatMessageAssistant}`}>
      <Markdown remarkPlugins={[remarkGfm]}>{msg.msg}</Markdown>
      <UsageIndicator usage={msg.usage} />
    </div>
  );
};