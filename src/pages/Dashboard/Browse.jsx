import React from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const Browse = () => {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <SmallNav>
            Browse <AiOutlineQuestionCircle />
          </SmallNav>
        </div>
      </div>
    </>
  )
}

export default Browse
