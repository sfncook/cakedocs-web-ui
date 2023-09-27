import { useState } from "react";
import styles from '@/styles/QueryInput.module.css'
import Image from 'next/image'

export default function QueryInput ({ submitQuery, addNewUserMsg }) {
  const [queryTxt, setQueryText] = useState("")

  const handleSubmit = () => {
    console.log(`QueryInput.handleSubmit ${queryTxt}`)
    addNewUserMsg(queryTxt)
    submitQuery(queryTxt)
    setQueryText("")
  }

  const submitBtnDisabled = !(queryTxt && queryTxt.length > 0)
  const submitBtnClassName = submitBtnDisabled ? styles.submitBtn : `${styles.submitBtn} ${styles.submitBtnEnabled}`
  const submitBtnImgSrc = submitBtnDisabled ? "/submit.png" : "/submit_enabled.png"

  return (
    <div className={styles.queryInputContainer}>
      <input
        type="text"
        value={queryTxt}
        onChange={e=>setQueryText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && !submitBtnDisabled) {
            handleSubmit();
          }
        }}
        className={styles.textInput}
        placeholder="Enter text..."
      />
      <button className={submitBtnClassName} disabled={submitBtnDisabled} >
        <Image
          src={submitBtnImgSrc}
          alt="Submit"
          width={10}
          height={10}
          priority
          onClick={handleSubmit}
        />
      </button>
    </div>
  );
};
