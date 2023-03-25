import Cookies from 'js-cookie';
import {useRef, useState} from 'react';
// // import ReCAPTCHA from "react-google-recaptcha";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import HomeTitle from '../components/HomeTitle';
// import { captchaSiteKey } from "../settings";

import {AiOutlineUser, AiOutlineMail} from 'react-icons/ai';
import {HiOutlineLockClosed} from 'react-icons/hi';

export default function Register() {
  const [username, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confimPassword, setConfirmPassword] = useState('');
  const [captcha, setCaptcha] = useState();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const captchaRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const registerStatus = async (queue_id) => {
    // Return whether to break or keep polling
    try {
      const response = await fetch(`/auth/register/status/${queue_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          const urlParams = new URLSearchParams(location.search);
          navigate(urlParams.get('next') || '/');
          return false;
        }
        setErrors(data);
        return true;
      }
      const data = await response.json();
      captchaRef.current?.reset();
      //    setCaptcha();
      setErrors(data);
      setLoading(false);
      return false;
    } catch (reason) {
      console.log(reason);
      setLoading(false);
    }
    return false;
  };

  const register = async (e) => {
    e.preventDefault();
    if (password !== confimPassword) {
      setErrors({password2: 'Passwords do not match.'});
      return;
    }
    try {
      setLoading(true);
      setErrors({});
      const body = {
        username,
        email,
        password1: password,
        password2: confimPassword,
        captcha,
      };
      const response = await fetch(`/auth/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        const queueId = data.queue_id;
        if (!queueId) {
          setLoading(false);
          return;
        }
        while (true) {
          if (!(await registerStatus(queueId))) return;
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
      setLoading(false);
      const data = await response.json();
      setErrors(data);
      captchaRef.current?.reset();
      setCaptcha();
    } catch (reason) {
      console.log(reason);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="register-page">
        <div className="register">
          <HomeTitle>Sign Up</HomeTitle>
          <div className="register-text">Create Your Account</div>
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
              onChange={(e) => setFirstName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password1}
              className="login-input"
            />
            <Input
              label="Confirm Password"
              placeholder="Password Confirmation"
              type="password"
              required={true}
              icon={<HiOutlineLockClosed />}
              value={confimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.password2}
              className="login-input"
            />
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              className="login-btn-ub"
            >
              Sign Up
            </Button>
            <div className="already-account">
              <span>Already have an account ?</span>
              <Link to="/login">Login</Link>.
            </div>
          </Form>
        </div>
      </div>
    </>
  );
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
