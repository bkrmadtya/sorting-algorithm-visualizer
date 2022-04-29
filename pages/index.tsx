import { NextPage } from 'next';
import React from 'react';

import styles from '../styles/pages/Home/index.module.scss'

import { BottomPanel, MainPanel } from '../components/Home';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.rightPanel}>
        <MainPanel />
        <BottomPanel />
      </div>
    </div >
  )
}

export default Home;