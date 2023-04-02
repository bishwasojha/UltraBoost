import React from 'react'
import { useState } from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import ReactTable from '../../components/Dashboard/ReactTable'
import DashboardSearch from '../../components/Dashboard/DashboardSearch'
import Button from '../../components/Button'
import question from '../../Assets/Icons/Dashboard/question.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dashboard = () => {
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'TYPE',
      accessor: 'type',
    },
    {
      Header: 'GAME',
      accessor: 'game',
    },
    {
      Header: 'DATE',
      accessor: 'date',
    },
    {
      Header: 'DETAILS',
      accessor: 'details',
    },
    {
      Header: 'BOOSTER',
      accessor: 'booster',
    },
    {
      Header: 'STATUS',
      accessor: 'status',
    },
    {
      Header: 'DATE COMPLETED',
      accessor: 'dateCompleted',
    },
  ]

  const data = [
    {
      id: 234212,
      type: 'Division Boosting',
      game: 'League of Legends',
      date: '3rd March 2023',
      details: 'Bronze IV -> Platinum II',
      booster: 'pradish#2342',
      status: 'In progress',
      dateCompleted: '',
    },
  ]

  const [selectedRows, setSelectedRows] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(true)
  }

  const handleRowSelect = rows => {
    setSelectedRows(rows)
  }
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <SmallNav>
            Orders
            <div className="small-div-icon">
              <img src={question} alt="" srcset="" />
            </div>
          </SmallNav>
          <div className="search-button-bar">
            <div className="button-bars">
              <Button
                className={`dashboard-btn ${
                  isClicked ? 'dashboard-btn-active' : ''
                }`}
                onClick={handleClick}
              >
                All
              </Button>
              <Button className="dashboard-btn">Unassigned</Button>
              <Button className="dashboard-btn">In Progress</Button>
              <Button className="dashboard-btn">Completed</Button>
            </div>
            <div className="dashboard-order-search">
              <DashboardSearch />
            </div>
          </div>
          
          <div className="dash-table">
            <ReactTable
              columns={columns}
              data={data}
              onRowSelect={handleRowSelect}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
