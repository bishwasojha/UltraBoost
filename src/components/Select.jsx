/*import React, { useState } from 'react';

import Select from 'react-select';
const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

export default () => {
  const [isClearable, setIsClearable] = useState(true);
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={isClearable}
        name="color"
        options={colourOptions}
      />
    </>
  );
};*/

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
