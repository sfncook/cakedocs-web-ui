import { useState } from "react";
import styles from '@/styles/QueryInput.module.css'
import Image from 'next/image'
import Spinner from "@/components/Spinner";

export default function QueryInput ({ submitQuery, addNewUserMsg, waiting }) {
  const [queryTxt, setQueryText] = useState("")

  const handleSubmit = () => {
    // console.log(`QueryInput.handleSubmit ${queryTxt}`)
    submitQuery(queryTxt)
    setQueryText("")
  }

  const submitBtnDisabled = !(queryTxt && queryTxt.length > 0) || waiting
  const submitBtnClassName = submitBtnDisabled ? styles.submitBtn : `${styles.submitBtn} ${styles.submitBtnEnabled}`
  const submitBtnImgSrc = submitBtnDisabled ? "/submit.png" : "/submit_enabled.png"

  const btnImg = waiting ? (<Spinner/>):(
    <Image
      src={submitBtnImgSrc}
      alt="Submit"
      width={10}
      height={10}
      priority
      onClick={handleSubmit}
    />
  )

  return (
    <div className={styles.queryInputContainer}>
      <input
        disabled={waiting}
        style={waiting && {opacity: 0.9} || {}}
        type="text"
        value={queryTxt}
        onChange={e=>setQueryText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && !submitBtnDisabled) {
            handleSubmit();
          }
        }}
        className={styles.textInput}
        placeholder={waiting ? "Give me a moment to look that up for you..." : "Enter text..."}
      />
      <button className={submitBtnClassName} disabled={submitBtnDisabled} >
        {btnImg}
      </button>
    </div>
  );
};
