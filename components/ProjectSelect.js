import React from 'react';
import styles from '@/styles/ProjectSelect.module.css'

export default function ProjectSelect ({ repos }) {
  return (
    <select className={styles.projectSelect}>
      {
        repos.map(repo => (<option key={repo.repo_name} value="date">{repo.repo_name}</option>))
      }
    </select>
  );
};
