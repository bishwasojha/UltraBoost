import React from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import Table from '../../components/Dashboard/Table'
import CustomTable from '../../components/Dashboard/CustomTable'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <SmallNav>
            Dashboard <AiOutlineQuestionCircle />
          </SmallNav>
          <CustomTable />
        </div>
      </div>
    </>
  )
}

export default Dashboard
