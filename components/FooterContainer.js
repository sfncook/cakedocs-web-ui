import React from 'react';
import styles from '@/styles/FooterContainer.module.css'
import Image from 'next/image'
import PillButton from "@/components/PillButton";
import ProjectSelect from "@/components/ProjectSelect";
import QueryInput from "@/components/QueryInput";
import Spinner from "@/components/Spinner";
import { FaExternalLinkAlt } from 'react-icons/fa';
import ModelSelect from "@/components/ModelSelect";
import Drawer from "@/components/Drawer";
import QuestionHintsDrawer from "@/components/QuestionHintsDrawer";

export default function FooterContainer ({
    repos, setSelectedRepo, selectedRepo,
    submitQuery, addNewUserMsg, waiting,
    models, setSelectedModel, selectedModel,
}) {
  return (
      <div className={styles.footerContainer}>
        <QueryInput submitQuery={submitQuery} addNewUserMsg={addNewUserMsg} waiting={waiting} />
        <div className={styles.footerContainer2}>
          <div className={styles.footerLeftContainer}>
            <Drawer
              repos={repos}
              setSelectedRepo={setSelectedRepo}
              selectedRepo={selectedRepo}
              models={models}
              setSelectedModel={setSelectedModel}
              selectedModel={selectedModel}
            />
          </div>

          <div className={styles.footerRightContainer}>
            <QuestionHintsDrawer />
          </div>
        </div>
      </div>
  );
};
