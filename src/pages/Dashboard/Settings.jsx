import React from 'react'
import Cookies from 'js-cookie'
//import { useParams } from 'react-router-dom'
import { useState, Link } from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { FaLock } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Settings = () => {
  //const [selectedIndex, setSelectedIndex] = useState(0)
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confimPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState()

  //const { uid, token } = useParams()

  const resetPassword = async e => {
    e.preventDefault()
    if (newPassword !== confimPassword) {
      setErrors({ confimPassword: 'Passwords do not match.' })
      return
    }

    try {
      setLoading(true)
      setErrors({})
      setMessage(null)
      const body = {
        oldPassword,
        newPassword
      }
      const response = await fetch(`http://ultraboost.sandbox.com.np/api/v1/users/change-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
          'Cookie': document.cookie,
        },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        setMessage('Password changed successfully.')
        return
      }
      const json = await response.json()
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
            <h2 className="settings-title">Settings</h2>
            <Tabs>
              <TabList>
                <Tab>
                  <Button className="custom-btn-class">Account details</Button>
                </Tab>
                <Tab>
                  <Button className="custom-btn-class">Security</Button>
                </Tab>
              </TabList>

              <TabPanel>
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
              </TabPanel>
              <TabPanel>
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
                        value={oldPassword}
                        icon={<FaLock />}
                        onChange={e => setOldPassword(e.target.value)}
                        error={errors.oldPassword}
                      />
                      <Input
                        className="login-input"
                        label="New Password"
                        placeholder="Enter new password"
                        type="password"
                        required={true}
                        icon={<FaLock />}
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        error={errors.newPassword}
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
                        error={errors.confimPassword}
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
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
