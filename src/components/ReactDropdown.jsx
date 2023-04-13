import React from 'react'
import Dropdown from 'react-dropdown'

const ReactDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  className,
  label,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      {console.log('qq', placeholder)}
      <Dropdown
        className={className}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default ReactDropdown
