import React, { useRef } from 'react'

import styles from '../../../styles/common/Dropdown.module.scss';

type IProps = {
  name?: string
  options: {
    key: string
    value: string
  }[]
  onChange?: React.ReactEventHandler
  value?: string
}

const Dropdown: React.FC<IProps> = ({ name, options, onChange, value }) => {
  // const ref = useRef(0)
  return (
    <>
      <select
        name={name}
        className={styles.dropdown}
        onChange={onChange}
        defaultValue={value}
      >
        {options.map(({ key, value }) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
      {/* {ref.current++} */}
    </>
  )
}

export default Dropdown
