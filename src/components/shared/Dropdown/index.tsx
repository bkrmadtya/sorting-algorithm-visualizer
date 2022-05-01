import { FC } from 'react'

type IProps = {
  name?: string
  options: {
    key: string
    value: string
  }[]
  onChange?: React.ReactEventHandler
  value?: string
}

const Dropdown: FC<IProps> = ({ name, options, onChange, value }) => {
  return (
    <select
      name={name}
      className='dropdown'
      onChange={onChange}
      defaultValue={value}
    >
      {options.map(({ key, value }) => (
        <option key={key} value={value}>
          {key}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
