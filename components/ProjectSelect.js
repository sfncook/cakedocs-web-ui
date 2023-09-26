import { useState } from "react";
import styles from '@/styles/ProjectSelect.module.css'

export default function ProjectSelect ({ repos, setSelectedRepo, selectedRepo }) {
  const [selectedRepoName, _setSelectedRepoName] = useState()

  const setSelectedRepName = repoName => {
    console.log(`setSelectedRepName ${repoName}`)
    _setSelectedRepoName(repoName)
    const selectedRepo = repos.find(repo => repo.repo_name === repoName)
    setSelectedRepo(selectedRepo)
  }

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`)
    setSelectedRepName(event.target.value)
  }

  if(repos && repos.length && !selectedRepoName) {
    // console.log('I think I need to set repo')
    setSelectedRepName(repos[0].repo_name)
  }

  return (
    <select value={selectedRepoName} onChange={handleChange} className={styles.projectSelect}>
      {
        repos.map(repo => (<option key={repo.repo_name} value={repo.repo_name}>{repo.repo_name}</option>))
      }
    </select>
  );
};
