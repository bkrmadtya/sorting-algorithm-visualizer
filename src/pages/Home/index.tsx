import React from 'react'

// components
import { SidePanel, MainPanel, BottomPanel } from './components'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <SidePanel />
      <MainPanel />
      <BottomPanel />
    </div>
  )
}

export default Home
