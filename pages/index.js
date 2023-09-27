import { useState, useEffect } from "react";
import Head from 'next/head'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import FooterContainer from "@/components/FooterContainer";
import QueryInput from "@/components/QueryInput";
import ChatMessagesContainer from "@/components/ChatMessagesContainer";
const { v4: uuidv4 } = require('uuid');

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [repos, setRepos] = useState([])
  const [selectedRepo, _setSelectedRepo] = useState()
  const [repoNameToMsgs, _setRepoNameToMsgs] = useState({})
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    const response = fetch("/api/repos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res.repos)
        setRepos(res.repos)

        if(res.repos && res.repos.length && !selectedRepo) {
          // console.log(`Home.setting selectedRepo to ${res.repos[0].repo_name}`)
          setSelectedRepo(res.repos[0])
        }
      })
  }, [])

  const submitQuery = async query => {
    setWaiting(true)
    await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        repo_url: selectedRepo.repo_url,
        msgs: repoNameToMsgs[selectedRepo.repo_name],
      }),
    })
      .then(res => res.json())
      .then(res => {
        const newId = uuidv4()
        // console.log(`HOME.submitQuery response ${newId}`)
        // console.log(res)
        addMsgForRepo(selectedRepo, {id: newId, msg:res.assistantResponse, role:'ASSISTANT'})
      })
      .finally(() => {
        setWaiting(false)
      })
  }

  const addNewUserMsg = msg => {
    const newId = uuidv4()
    // console.log(`HOME.addNewUserMsg ${newId}`)
    addMsgForRepo(selectedRepo, {id: newId, msg:msg, role:'USER'})
  }

  const addMsgForRepo = (repo, msg) => {
    // console.log(`addMsgForRepo ${msg.id} ${msg.msg}`)
    _setRepoNameToMsgs(prevRepoNameToMsgs => {
      if(msg.msg) {
        const msgAlreadyInList = prevRepoNameToMsgs[repo.repo_name] && prevRepoNameToMsgs[repo.repo_name].some(item => item.id === msg.id)
        if(msgAlreadyInList) {
          // console.log('already in list')
          console.log(prevRepoNameToMsgs[repo.repo_name])
          return prevRepoNameToMsgs
        }
        const _repoToMsgs = {...prevRepoNameToMsgs}
        if(!_repoToMsgs[repo.repo_name]) {
          _repoToMsgs[repo.repo_name] = []
        }
        _repoToMsgs[repo.repo_name].push(msg)
        return _repoToMsgs;
      } else {
        return prevRepoNameToMsgs
      }
    });
  }

  const setSelectedRepo = repo => {
    console.log(`HOME.setSelectedRepo ${repo.repo_name}`)
    _setSelectedRepo(repo)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ChatMessagesContainer msgs={selectedRepo && repoNameToMsgs[selectedRepo.repo_name]} selectedRepo={selectedRepo} />
        <FooterContainer
          repos={repos}
          setSelectedRepo={setSelectedRepo}
          selectedRepo={selectedRepo}
          submitQuery={submitQuery}
          addNewUserMsg={addNewUserMsg}
          waiting={waiting}
        />
      </main>
    </>
  )
}
