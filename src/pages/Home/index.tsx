import React from 'react'

// components
import {
  BottomPanel,
  MainPanel
  // ,SidePanel,
} from '../../components/Home'

const Home: React.FC = () => {
  return (
    <div className='home'>
      {/* <SidePanel /> */}
      <div className='rightPanel'>
        <MainPanel />
        <BottomPanel />
      </div>
    </div>
  )
}

export default Home
