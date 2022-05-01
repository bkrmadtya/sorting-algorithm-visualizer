import { FC } from 'react'

interface IProps {
  children: React.ReactNode
  className?: string
}

const Header: FC<IProps> = ({ children, className }: IProps) => {
  return <h1 className={className}>{children}</h1>
}

export default Header
