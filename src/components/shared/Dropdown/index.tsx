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
    <div className='dropdown'>
      <label className='dropdown__label'>{name}:</label>
      <select
        className='dropdown__select'
        defaultValue={value}
        data-name={name}
        name={name}
        onChange={onChange}
      >
        {options.map(({ key, value }) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
