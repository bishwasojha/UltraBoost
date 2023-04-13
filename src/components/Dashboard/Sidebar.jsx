import Cookies from 'js-cookie'
import React, { useCallback } from 'react'
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
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  const logout = useCallback(async () => {
    try {
      const response = await fetch('/api/v1/users/logout/', {
        method: 'POST',
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
      })
      if (response.ok) {
        navigate('/login', { options: { replace: true } })
      }
    } catch (error) {
      console.error()
    } finally {
    }
  }, [navigate])

  return (
    <div className="sidebar-container">
      <div className="top-sidebar">
        <div className="profile-name">
          <img src={dashboard_orderitem} alt="" />
          <span>pradishb</span>
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </div>

        <div>
          <div className="sidebar-navbar">
            <NavLink
              strict="true"
              to="/dashboard/"
              className="menu-item"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faListUl} /> <span>Orders</span>
            </NavLink>
            <NavLink
              strict="true"
              to="/dashboard/jobs/"
              className="menu-item"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faBarsProgress} /> <span>Jobs</span>
            </NavLink>
            <NavLink
              strict="true"
              to="/dashboard/browse/"
              className="menu-item"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faFolderOpen} /> <span>Browse</span>
            </NavLink>
            <NavLink
              strict="true"
              to="/dashboard/payment/"
              className="menu-item"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faRightLeft} /> <span>Payments</span>
            </NavLink>
          </div>
          <div className="sidebar-navbar-second">
            <NavLink
              strict="true"
              to="/dashboard/settings"
              className="menu-item"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faGear} /> <span>Settings</span>
            </NavLink>
            <Link
              strict="true"
              className="menu-item"
              activeClassName="active"
              onClick={logout}
            >
              <FontAwesomeIcon icon={faRightFromBracket} /> <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bottom-sidebar">
        <div className="collapse">
          <FontAwesomeIcon icon={faChevronLeft} size="xs" />{' '}
          <span>Collapse</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
