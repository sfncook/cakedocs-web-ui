import React from 'react';
import styles from '@/styles/FooterContainer.module.css'
import Image from 'next/image'
import PillButton from "@/components/PillButton";

export default function FooterContainer ({  }) {

    return (
        <div className={styles.footerContainer}>
          <div className={styles.footerLeftContainer}>
            <Image
              src="/cake.png"
              alt="CakeDocs.AI"
              className={styles.cakeLogo}
              width={100}
              height={24}
              priority
            />
            <div className={styles.repoTitle}>
              Profiles Svc
            </div>
          </div>

          <div className={styles.footerRightContainer}>
            <PillButton text="Describe the system architecture" />
            <PillButton text="Draw a sequence diagram of the API" />
            <PillButton text="What does this application do?" />
          </div>
        </div>
    );
};
