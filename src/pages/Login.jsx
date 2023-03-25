// Importing from packages
import Cookies from 'js-cookie';
import {useState} from 'react';
import {useLocation, useNavigate, Link} from 'react-router-dom';

import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Hometitle from '../components/HomeTitle';
import Navbar from '../components/Navbar';

import {AiOutlineUser} from 'react-icons/ai';
import {HiOutlineLockClosed} from 'react-icons/hi';

export default function Login() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const loginStatus = async (queue_id) => {
    // Return whether to break or keep polling
    try {
      const response = await fetch(`/auth/login/status/${queue_id}/`, {
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
          navigate(urlParams.get('next') || '/my-account/orders');
          return false;
        }
        setErrors(data);
        return true;
      }
      const data = await response.json();
      setErrors(data);
      setLoading(false);
      return false;
    } catch (reason) {
      console.log(reason);
      setLoading(false);
    }
    return false;
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setErrors({});
      const body = {
        username,
        password,
      };
      const response = await fetch(`/auth/login/`, {
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
          if (!(await loginStatus(queueId))) return;
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
      const json = await response.json();
      setErrors(json);
    } catch (reason) {
      console.log(reason);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-detail">
          <Hometitle>Log in</Hometitle>
          <div className="login-text">Welcome Back !</div>
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
              onChange={(e) => setEmail(e.target.value)}
              error={errors.username}
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
              error={errors.password}
              className="login-input"
            />
            <div className="forgot-password">
              <Link
                to="/forgot-password"
                className="not-registered-link"
                style={{textDecoration: 'none'}}
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
                style={{textDecoration: 'none'}}
              >
                Sign Up
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
