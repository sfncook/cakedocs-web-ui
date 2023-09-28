import React from 'react';
import styles from '@/styles/FooterContainer.module.css'
import stylesDrawer from '@/styles/Drawer.module.css'
import PillButton from "@/components/PillButton";
import ProjectSelect from "@/components/ProjectSelect";
import QueryInput from "@/components/QueryInput";
import ModelSelect from "@/components/ModelSelect";
import Drawer from "@/components/Drawer";

export default function FooterContainer ({
    repos, setSelectedRepo, selectedRepo,
    submitQuery, addNewUserMsg, waiting,
    models, setSelectedModel, selectedModel,
}) {

  const leftDrawerContent = (
    <div className={stylesDrawer.drawerContent}>
      <div className={stylesDrawer.settingsContent}>
        <ProjectSelect repos={repos} setSelectedRepo={setSelectedRepo} selectedRepo={selectedRepo} />
        <ModelSelect models={models} setSelectedModel={setSelectedModel} selectedModel={selectedModel} />
      </div>
    </div>
  )

  const rightDrawerContent = (
    <div className={stylesDrawer.drawerContent}>
      <div className={stylesDrawer.iceBreakersContent}>
        <div className={stylesDrawer.iceBreakersTitle}>Wondering what to ask? Try these!</div>
        <div className={stylesDrawer.iceBreakersGrid}>
          <PillButton text="Describe the system architecture." />
          <PillButton text="How well written is the software?" />
          <PillButton text="What does this application do?" />
        </div>
      </div>
    </div>
  )

  return (
      <div className={styles.footerContainer}>
        <QueryInput submitQuery={submitQuery} addNewUserMsg={addNewUserMsg} waiting={waiting} />
        <div className={styles.footerContainer2}>
          <div className={styles.footerLeftContainer}>
            <Drawer content={leftDrawerContent} title="Settings"/>
          </div>

          <div className={styles.footerRightContainer}>
            <Drawer content={rightDrawerContent} title="Ice Breakers"/>
          </div>
        </div>
      </div>
  );
};
