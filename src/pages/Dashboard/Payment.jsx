import React from 'react'
import { useState } from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import { FaSearch } from 'react-icons/fa'
import ReactTable from '../../components/Dashboard/ReactTable'
import question from '../../Assets/Icons/Dashboard/question.svg'
const Payment = () => {
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
      Header: 'CREATED',
      accessor: 'created',
    },
    {
      Header: 'ORDER',
      accessor: 'order',
    },
    {
      Header: 'AMOUNT',
      accessor: 'amount',
    },
  ]

  const data = [
    {
      id: 234212,
      type: 'Division Boosting',
      created: '3rd March 2023',
      order: 'Order#1137',
      amount: '$13.37',
    },
    {
      id: 234212,
      type: 'Division Boosting',
      created: '3rd March 2023',
      order: 'Order#1137',
      amount: '$13.37',
    },
  ]

  const [selectedRows, setSelectedRows] = useState([])

  const handleRowSelect = rows => {
    setSelectedRows(rows)
  }
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <SmallNav>
            Payments
            <div className="small-div-icon">
              <img src={question} alt="" srcset="" />
            </div>
          </SmallNav>
          <div className="payment-search">
            <FaSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="payment-table">
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

export default Payment
