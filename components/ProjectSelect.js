import styles from '@/styles/ProjectSelect.module.css'

export default function ProjectSelect ({ repos, setSelectedRepo, selectedRepo }) {

  const handleChange = event => {
    // console.log(`ProjectSelect.handleChange ${event.target.value}`)
    const repoName = event.target.value
    const selectedRepo = repos.find(repo => repo.repo_name === repoName)
    if(selectedRepo) setSelectedRepo(selectedRepo)
  }

  return (
    <select value={selectedRepo && selectedRepo.repo_name} onChange={handleChange} className={styles.projectSelect}>
      {
        repos.map(repo => (<option key={repo.repo_name} value={repo.repo_name}>{repo.repo_name}</option>))
      }
    </select>
  );
};
