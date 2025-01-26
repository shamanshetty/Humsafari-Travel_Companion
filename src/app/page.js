'use client'
import ChatComponent from "./components/ChatComponent";
import 'react-chatbot-kit/build/main.css';
import styles from "./page.module.css";
import "./custom.css";


export default function Home() {
  return (
    
    <div className={styles.page}>
      <main className={styles.main}>
        <ChatComponent />
      </main>      
    </div>
  
  );
}
