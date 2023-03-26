import Cookies from 'js-cookie'
import { useRef, useState } from 'react'
// import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
// import { captchaSiteKey } from "../settings";

import Navbar from '../components/Navbar'
import HomeTitle from '../components/HomeTitle'

import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [captcha, setCaptcha] = useState()

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState()

  const captchaRef = useRef()

  const notify = () => {
    toast.success('Reset Email Sent!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    })

    toast.error('Email not found!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    })
  }

  const login = async e => {
    e.preventDefault()

    try {
      setLoading(true)
      setErrors({})
      setMessage(null)
      const body = {
        email,
        captcha,
      }
      const response = await fetch(`/auth/password/reset/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(body),
      })

      captchaRef.current?.reset()
      setCaptcha()
      if (response.status === 429) {
        setErrors({ email: 'Too many attempts. Please slow down.' })
        return
      }
      if (response.ok) {
        setMessage('Password reset e-mail has been sent.')
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
        <div className="login-detail">
          <HomeTitle>Log in</HomeTitle>
          <div className="login-text">Reset Password</div>
          <Form
            onSubmit={login}
            message={message}
            error={errors.non_field_errors}
          >
            <Input
              label="Email address"
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
                onClick={notify}
                type="submit"
                loading={loading}
                disabled={loading}
                className="login-btn-ub"
              >
                Reset Password
              </Button>
              <ToastContainer transition={Slide} />
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
