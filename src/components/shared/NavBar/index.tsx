import Link from 'next/link'
import React from 'react'

// components
import { Header } from '..'

interface IProps {
  children?: React.ReactNode
}

const NavBar: React.FC<IProps> = ({ children }) => {
  return (
    <div className='navbar'>
      <Header className='navbar__header'>
        <Link href={'/'}>SORTING ALGORITHM VISUALIZER</Link>
      </Header>
      <div className='navbar__content'>{children}</div>
    </div >
  )
}

export default NavBar
