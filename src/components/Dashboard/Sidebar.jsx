import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faRightLeft,
  faFolderOpen,
  faListUl,
  faRightFromBracket,
  faBarsProgress,
  faChevronDown,
  faChevronLeft,
  faGear,
} from '@fortawesome/free-solid-svg-icons'

export default props => {
  return (
    <div className="sidebar-container">
      <div className="profile-name">
        <FontAwesomeIcon icon={faUser} className="usericon" />{' '}
        <span>Pradish</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="sidebar-navbar">
        <a href="/testing" className="menu-item">
          <FontAwesomeIcon icon={faListUl} /> <span>Orders</span>
        </a>
        <a href="/testing/jobs" className="menu-item">
          <FontAwesomeIcon icon={faBarsProgress} /> <span>Jobs</span>
        </a>
        <a href="/testing/browse" className="menu-item">
          <FontAwesomeIcon icon={faFolderOpen} /> <span>Browse</span>
        </a>
        <a href="/testing/payment" className="menu-item">
          <FontAwesomeIcon icon={faRightLeft} /> <span>Payments</span>
        </a>
      </div>
      <div className="sidebar-navbar-second">
        <a href="/testing/settings" className="menu-item">
          <FontAwesomeIcon icon={faGear} /> <span>Settings</span>
        </a>
        <a href="/testing" className="menu-item">
          <FontAwesomeIcon icon={faRightFromBracket} /> <span>Logout</span>
        </a>
      </div>
      <div className="collapse">
        <FontAwesomeIcon icon={faChevronLeft} /> <span>Collapse</span>
      </div>
    </div>
  )
}
