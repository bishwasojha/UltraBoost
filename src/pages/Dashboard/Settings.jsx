import React from 'react'
import { useState, Link } from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import SmallNav from '../../components/Dashboard/SmallNav'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { FaLock } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Settings = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [password, setPassword] = useState('')
  const [confimPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const resetPassword = async e => {
    e.preventDefault()
    if (password !== confimPassword) {
      setErrors({ new_password2: 'Passwords do not match.' })
      return
    }

    try {
      setLoading(true)
      setErrors({})
      setMessage(null)
      const body = {
        new_password1: password,
        new_password2: confimPassword,
        uid,
        token,
      }
      const response = await fetch(`/auth/password/reset/confirm/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        setMessage('Password changed successfully.')
        return
      }
      const json = await response.json()
      if (json.token || json.uid) {
        json.non_field_errors = 'Cannot reset password.'
      }
      setErrors(json)
    } catch (reason) {
      console.log(reason)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="sidenav-div">
          <div className="tab-grid-custom">
            <SmallNav>Settings</SmallNav>
            <div className="tab-list">
              <button>
                <span>Account Details</span>
              </button>
              <button>
                <span>Security</span>
              </button>
            </div>
            <div className="tab-content">
              <div className="content-1">
                <div className="content-text">
                  <span>Change Email</span>
                </div>
                <div className="content-content">
                  <Form
                    onSubmit={resetPassword}
                    error={errors.non_field_errors || errors.detail}
                  >
                    <Input
                      label="Password"
                      placeholder="Password"
                      type="password"
                      required={true}
                      icon={<FaLock />}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      error={errors.password}
                      className="login-input"
                    />
                    <Input
                      label="Email"
                      placeholder="Placeholder"
                      type="email"
                      required={true}
                      icon={<AiOutlineMail />}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      error={errors.email}
                      className="login-input"
                    />
                    <div className="login-btn">
                      <Button
                        className="login-btn-ub"
                        type="submit"
                        loading={loading}
                        disabled={loading}
                      >
                        Change Email
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="content-2">
                <div className="content-text">
                  <span>Reset Password</span>
                </div>
                <div className="content-content">
                  <Form
                    onSubmit={resetPassword}
                    error={errors.non_field_errors}
                  >
                    <Input
                      className="login-input"
                      label="Current Password"
                      placeholder="Enter current password"
                      type="password"
                      required={true}
                      value={password}
                      icon={<FaLock />}
                      onChange={e => setPassword(e.target.value)}
                      error={errors.new_password1}
                    />
                    <Input
                      className="login-input"
                      label="New Password"
                      placeholder="Enter new password"
                      type="password"
                      required={true}
                      icon={<FaLock />}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      error={errors.new_password1}
                    />
                    <Input
                      className="login-input"
                      label="Confirm New Password"
                      placeholder="Enter new password again"
                      type="password"
                      required={true}
                      icon={<FaLock />}
                      value={confimPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      error={errors.new_password2}
                    />
                    <div className="login-btn">
                      <Button
                        className="login-btn-ub"
                        type="submit"
                        loading={loading}
                        disabled={loading}
                      >
                        Change Password
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
