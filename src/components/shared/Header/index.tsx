import React from 'react'

interface IProps {
  children: any
  className?: string
}

const Header: React.FC<IProps> = ({ children, className }: IProps) => {
  return <h1 className={className}>{children}</h1>
}

export default Header
