import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Header } from '@/components/shared'

interface IProps {
  children?: React.ReactNode
}

const NavBar: FC<IProps> = ({ children }) => {
  return (
    <div className='navbar'>
      <Header className='navbar__header'>
        <Link to='/'>
          SORTING ALGORITHM <br /> VISUALIZER
        </Link>
      </Header>
      <div className='navbar__content'>{children}</div>
    </div>
  )
}

export default NavBar
