import React, { useState, useCallback } from 'react'
import '../css/Checkbox.css'

const Checkbox = ({ label, value, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = useCallback(() => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange(newValue, value)
  }, [isChecked, onChange, value])

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  )
}

export default Checkbox
