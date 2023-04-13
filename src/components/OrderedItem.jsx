import React from 'react'

const OrderItems = ({ title, pricing, key }) => {
  return (
    <>
      <div className="boosting-type">
        <div className="title-of-service">{title}</div>
        <div className="cost-of-service">{pricing}</div>
      </div>

      {/* <div className="order-cost-from-checkbox">
{selectedCheckboxes.length === 0 ? (
  <p>No options selected</p>
) : (
  <ul className='selectedCheckboxInOrder'>
    {selectedCheckboxes.map(checkbox => (
      <li 
       key={checkbox.value}>
        <span>{checkbox.label}</span>
        <span>$2.00</span>
      </li>
    ))}
  </ul>
)}
</div> */}
    </>
  )
}

export default OrderItems
