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

export default function FooterContainer ({
    repos, setSelectedRepo, selectedRepo,
    submitQuery, addNewUserMsg, waiting,
    models, setSelectedModel, selectedModel,
}) {
  return (
      <div className={styles.footerContainer}>
        <Drawer/>
      </div>
  );
};

// <QueryInput submitQuery={submitQuery} addNewUserMsg={addNewUserMsg} waiting={waiting} />

// <div className={styles.footerLeftContainer}>
//   <Image
//     src="/cake.png"
//     alt="CakeDocs.AI"
//     className={styles.cakeLogo}
//     width={100}
//     height={24}
//     priority
//   />
//   <ProjectSelect repos={repos} setSelectedRepo={setSelectedRepo} selectedRepo={selectedRepo} />
//
//   <ModelSelect models={models} setSelectedModel={setSelectedModel} selectedModel={selectedModel} />
// </div>