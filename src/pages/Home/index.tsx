import React from 'react'

import { BottomPanel, MainPanel } from '../../components/Home'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='rightPanel'>
        <MainPanel />
        <BottomPanel />
      </div>
    </div>
  )
}

export default Home
