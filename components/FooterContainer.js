import React, {useState} from 'react';
import styles from '@/styles/FooterContainer.module.css'
import stylesDrawer from '@/styles/Drawer.module.css'
import PillButton from "@/components/PillButton";
import ProjectSelect from "@/components/ProjectSelect";
import QueryInput from "@/components/QueryInput";
import ModelSelect from "@/components/ModelSelect";
import Drawer from "@/components/Drawer";

const DRAWER_SETTINGS = 'settings'
const DRAWER_ICEBREAKERs = 'icebreakers'
export default function FooterContainer ({
    repos, setSelectedRepo, selectedRepo,
    submitQuery, addNewUserMsg, waiting,
    models, setSelectedModel, selectedModel,
}) {
  const [openDrawer, setOpenDrawer] = useState()

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
          <PillButton text="How well is the software written?" />
          <PillButton text="What does this application do?" />
          <PillButton text="What are the API endpoints?" />
        </div>
      </div>
    </div>
  )

  return (
      <div className={styles.footerContainer}>
        <QueryInput submitQuery={submitQuery} addNewUserMsg={addNewUserMsg} waiting={waiting} />
        <div className={styles.footerContainer2}>
          <div className={styles.footerLeftContainer}>
            <Drawer
              content={leftDrawerContent}
              title="Settings"
              isOpen={openDrawer === DRAWER_SETTINGS}
              handleOpen={() => setOpenDrawer(DRAWER_SETTINGS)}
              handleClose={() => setOpenDrawer(null)}
            />
          </div>

          <div className={styles.footerRightContainer}>
            <Drawer
              content={rightDrawerContent}
              title="Ice Breakers"
              isOpen={openDrawer === DRAWER_ICEBREAKERs}
              handleOpen={() => setOpenDrawer(DRAWER_ICEBREAKERs)}
              handleClose={() => setOpenDrawer(null)}
            />
          </div>
        </div>
      </div>
  );
};
