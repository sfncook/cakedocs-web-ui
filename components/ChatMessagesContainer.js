import styles from '@/styles/ChatMessages.module.css'
import remarkGfm from "remark-gfm";
import remarkMermaid from 'remark-mermaidjs'
import Markdown from "react-markdown";
import ChatMessageSystem from "@/components/ChatMessageSystem";
import ChatMessageAssistant from "@/components/ChatMessageAssistant";
import ChatMessageUser from "@/components/ChatMessageUser";

export default function ChatMessagesContainer ({ msgs, selectedRepo}) {
  const welcomeMsg = selectedRepo ?
    (<span>Welcome to CakeDocs! You are currently chatting with <a href={selectedRepo.repo_url} target="_blank">{selectedRepo.repo_name}</a>.<br/>Please type your questions below.</span>) :
    `Welcome to CakeDocs! Please select a project from the dropdown below to get started.`

  const markdown = `Just a link: www.nasa.gov.`
  const markdownContent = `
# This is a header

And this is a paragraph. Here's some code: \`const x = 10;\`
\`\`\`js
  console.log(\`query.js \${req.body.query} \${req.body.repo_url}\`)
  const body = {
    "repo_url": req.body.repo_url,
    "query": req.body.query,
    "msgs": req.body.msgs,
  }
  \`\`\`
    `;

  return (
    <div className={styles.chatMessagesContainer}>
      <ChatMessageSystem msg={welcomeMsg}/>
      {msgs && msgs.map((msg, index) => {
        switch (msg.role) {
          case 'system':
            return (<ChatMessageSystem key={index} msg={msg.msg}/>)
          case 'assistant':
            return (<ChatMessageAssistant key={index} msg={msg}/>)
          case 'user':
          default:
            return (<ChatMessageUser key={index} msg={msg.msg}/>)
        }
      })}
    </div>
  );
};
// <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
// {msgs && msgs.map((msg, index) => (<ChatMessage key={index} msg={msg.msg} role={msg.role}/>))}