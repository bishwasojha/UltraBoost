import React from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const Payment = () => {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <SmallNav>
            Payment <AiOutlineQuestionCircle />
          </SmallNav>
        </div>
      </div>
    </>
  )
}

export default Payment
