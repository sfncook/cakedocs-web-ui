import React, {useState} from 'react';
import styles from '@/styles/Drawer.module.css'
import ProjectSelect from "@/components/ProjectSelect";
import ModelSelect from "@/components/ModelSelect";

export default function Drawer ({
  repos, setSelectedRepo, selectedRepo,
  models, setSelectedModel, selectedModel,
}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
      <div className={`${styles.drawerContainer} ${isOpen && styles.open} ${!isOpen && styles.closed}`}>
        <button className={styles.toggleButton} onClick={toggleOpen}>
          <span className={styles.arrowIcon}>↑</span>
        </button>
          <div className={styles.drawerContent}>
            <ProjectSelect repos={repos} setSelectedRepo={setSelectedRepo} selectedRepo={selectedRepo} />
            <ModelSelect models={models} setSelectedModel={setSelectedModel} selectedModel={selectedModel} />
          </div>
      </div>
    );
};
