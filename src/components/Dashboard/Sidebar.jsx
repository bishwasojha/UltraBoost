import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRightLeft,
  faFolderOpen,
  faListUl,
  faRightFromBracket,
  faBarsProgress,
  faChevronDown,
  faChevronLeft,
  faGear,
} from '@fortawesome/free-solid-svg-icons'
import dashboard_orderitem from '../../Assets/Logos/Dashboard-OrderItem.svg'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="profile-name">
        <img src={dashboard_orderitem} alt="" />
        <span>pradishb</span>
        <FontAwesomeIcon icon={faChevronDown} size="xs" />
      </div>
      <div>
        <div className="sidebar-navbar">
          <NavLink strict to="/dashboard/" className="menu-item">
            <FontAwesomeIcon icon={faListUl} /> <span>Orders</span>
          </NavLink>
          <NavLink
            strict
            to="/dashboard/jobs/"
            className="menu-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faBarsProgress} /> <span>Jobs</span>
          </NavLink>
          <NavLink
            strict
            to="/dashboard/browse/"
            className="menu-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faFolderOpen} /> <span>Browse</span>
          </NavLink>
          <NavLink
            strict
            to="/dashboard/payment/"
            className="menu-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faRightLeft} /> <span>Payments</span>
          </NavLink>
        </div>
        <div className="sidebar-navbar-second">
          <NavLink
            strict
            to="/dashboard/settings"
            className="menu-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faGear} /> <span>Settings</span>
          </NavLink>
          <NavLink
            strict
            to="/login"
            className="menu-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faRightFromBracket} /> <span>Logout</span>
          </NavLink>
        </div>
      </div>
      <div className="collapse">
        <FontAwesomeIcon icon={faChevronLeft} size="xs" /> <span>Collapse</span>
      </div>
    </div>
  )
}

export default Sidebar
