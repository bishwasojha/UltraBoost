import React from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const Jobs = () => {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <SmallNav>
            Jobs <AiOutlineQuestionCircle />
          </SmallNav>
        </div>
      </div>
    </>
  )
}

export default Jobs
