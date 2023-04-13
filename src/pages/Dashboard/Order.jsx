import React from 'react'
import { useState } from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faSearch } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/Input'

const Order = () => {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <SmallNav>Orders/ Order #3342</SmallNav>
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
                <p className="our-chat">Hello from UltraBoost Team!</p>
                <p className="our-chat">
                  Thanks for purchasing division boosting, please send us your
                  username and password, so I can start boosting. Please disable
                  two factor authentication.
                </p>
                <p className="user-reply">
                  Username: bonop003 Password:3048234xyz!@#
                </p>
              </div>
              <div className="chat-box">
                <input type="text" placeholder="Send a message" />
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
            <div className="order-details-table">
              <div className="left-side-order">
                <div className="order-text">Order</div>
                <div className="order-subtext">Order #3342</div>
                <div className="order-text">Game</div>
                <div className="order-subtext">League of Legends</div>
                <div className="order-text">Start Rank</div>
                <div className="order-subtext">IRON III</div>
                <div className="order-text">Region</div>
                <div className="order-subtext">EUW</div>
                <div className="order-text">Status</div>
                <div className="order-subtext">In Progress</div>
              </div>
              <div className="right-side-order">
                <div className="order-text">Date Purchased</div>
                <div className="order-subtext">23rd March, 2023</div>
                <div className="order-text">Boost Type</div>
                <div className="order-subtext">Division Boosting</div>
                <div className="order-text">Desired Rank</div>
                <div className="order-subtext">GOLD IV</div>
                <div className="order-text">Queue Type</div>
                <div className="order-subtext">Solo Queue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
