import React from 'react';
import styles from '@/styles/FooterContainer.module.css'
import Image from 'next/image'
import PillButton from "@/components/PillButton";
import ProjectSelect from "@/components/ProjectSelect";
import QueryInput from "@/components/QueryInput";
import Spinner from "@/components/Spinner";
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function FooterContainer ({ repos, setSelectedRepo, selectedRepo, submitQuery, addNewUserMsg, waiting }) {
  return (
      <div className={styles.footerContainer}>
        <QueryInput submitQuery={submitQuery} addNewUserMsg={addNewUserMsg} waiting={waiting} />
        <div className={styles.footerContainer2}>
          <div className={styles.footerLeftContainer}>
            <Image
              src="/cake.png"
              alt="CakeDocs.AI"
              className={styles.cakeLogo}
              width={100}
              height={24}
              priority
            />
            <ProjectSelect repos={repos} setSelectedRepo={setSelectedRepo} selectedRepo={selectedRepo} />
            {
              selectedRepo && selectedRepo.repo_url &&
              <a href={selectedRepo.repo_url} target='_blank'><FaExternalLinkAlt className={styles.openRepoLinkImg} /></a>
            }
          </div>

          <div className={styles.footerRightContainer}>
            {/*<PillButton text="Describe the system architecture" />*/}
            {/*<PillButton text="Draw a sequence diagram of the API" />*/}
            {/*<PillButton text="What does this application do?" />*/}
          </div>
        </div>
      </div>
  );
};
