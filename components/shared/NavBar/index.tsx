import React from 'react'

import styles from '../../../styles/common/Navbar.module.scss'

// components
import { Header } from '..'
import Link from 'next/link'

interface IProps {
  children?: React.ReactNode
}

const NavBar: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.navbar}>
      <Header className={styles.header}>
        <Link href='/'>SORTING ALGORITHM VISUALIZER</Link>
      </Header>
      <div className={styles.links}>{children}</div>
    </div>
  )
}

export default NavBar
