// Importing from packages
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Hometitle from '../components/HomeTitle'
import Navbar from '../components/Navbar'

import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { IoMdInformationCircleOutline } from 'react-icons/io'

export default function Login() {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const location = useLocation()

  const login = async e => {
    e.preventDefault()

    try {
      setLoading(true)
      setErrors({})
      const body = {
        username,
        password,
      }
      const response = await fetch(`http://ultraboost.sandbox.com.np/api/v1/users/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        navigate('/dashboard')
        return false;
        /*
        const data = await response.json()
        console.log(data)
        if (data.user) {
          navigate('/dashboard/');
          setLoading(false);
          return false;
        } else {
          setErrors(data);
          setLoading(false);
          return true;
        }*/
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
      <Navbar />
      <div className="login-page">
        <div className="login-div">
        <div className="login-detail">
          <Hometitle>Log in</Hometitle>
          <p className="login-text">Welcome Back!</p>
          <Form
            onSubmit={login}
            error={errors.non_field_errors || errors.detail}
          >
            <Input
              label="Username"
              placeholder="Placeholder"
              type="text"
              required={true}
              icon={<AiOutlineUser />}
              value={username}
              onChange={e => setEmail(e.target.value)}
              error={errors.username}
              className="login-input"
            />
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              required={true}
              icon={<HiOutlineLockClosed />}
              passwordIcon = {<IoMdInformationCircleOutline/>}
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={errors.password}
              className="login-input"
            />
            <div className="forgot-password">
              <Link
                to="/forgot-password"
                className="not-registered-link"
                style={{ textDecoration: 'none' }}
              >
                Forgot Password ?
              </Link>
            </div>

              <div className="login-btn">
                <Button
                  className="login-btn-ub"
                  type="submit"
                  loading={loading}
                  disabled={loading}
                >
                  Login
                </Button>
              </div>
              <div className="not-a-user">
                Don't have an account?
                <Link
                  to="/register"
                  className="not-registered-link"
                  style={{ textDecoration: 'none' }}
                >
                  Sign Up
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
