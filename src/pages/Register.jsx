import Cookies from 'js-cookie'
import { useRef, useState } from 'react'
// // import ReCAPTCHA from "react-google-recaptcha";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import HomeTitle from '../components/HomeTitle'
// import { captchaSiteKey } from "../settings";

import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi'

export default function Register() {
  const [username, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captcha, setCaptcha] = useState()

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const captchaRef = useRef()

  const navigate = useNavigate()
  const location = useLocation()

  const register = async e => {
    e.preventDefault()
    try {
      setLoading(true)
      setErrors({})
      const body = {
        username,
        email,
        password,
        captcha,
      }
      const response = await fetch(`http://ultraboost.sandbox.com.np/api/v1/users/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        navigate('/login');
        return 
      }
      setLoading(false)
      const data = await response.json()
      setErrors(data)
      captchaRef.current?.reset()
      setCaptcha()
    } catch (reason) {
      console.log(reason);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className="register-page">
        <div className="register-div">
        <div className="register-detail">
          <HomeTitle>Sign Up</HomeTitle>
          <p className="register-text">Create Your Account</p>
          <Form
            onSubmit={register}
            error={errors.non_field_errors || errors.detail}
          >
            <Input
              label="Username"
              placeholder="Username"
              type="text"
              required={true}
              icon={<AiOutlineUser />}
              value={username}
              onChange={e => setFirstName(e.target.value)}
              error={errors.username}
              className="login-input"
            />
            <Input
              label="Email"
              placeholder="Email"
              type="email"
              required={true}
              icon={<AiOutlineMail />}
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={errors.email}
              className="login-input"
            />
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              required={true}
              icon={<HiOutlineLockClosed />}
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={errors.password1}
              className="login-input"
            />
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              className="register-btn-ub"
            >
              Sign Up
            </Button>
            <div className="already-account">
              <span>Already have an account?</span>
              <Link to="/login">Login</Link>
            </div>
          </Form>
        </div>
        </div>
        
      </div>
    </>
  )
}

/*
{captchaSiteKey && (
            <ReCAPTCHA
              className="recaptcha"
              ref={captchaRef}
              sitekey={captchaSiteKey}
              onChange={(value) => setCaptcha(value)}
            />
          )}
          */
