import React from 'react'
import { useState } from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/Input'

const Order = () => {
 
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <SmallNav>
            Orders/ Order #3342
          </SmallNav>
          <div className="button-bars">
            <Button className="dashboard-btn">Set Username/Password</Button>
            <Button className="dashboard-btn">Tip Booster</Button>
            <Button className="dashboard-btn">Poke Booster</Button>
            <Button className="dashboard-btn">Request New Booster</Button>
            <Button className="dashboard-btn">Cancel Order</Button>
          </div>
          <div className="order-content">
            <div className="order-chat">
                <div className="chat-content">

                </div>
                <div className="chat-box">
                    <input type="text" placeholder='Send a message' />
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
            <div className="order-details-table">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
