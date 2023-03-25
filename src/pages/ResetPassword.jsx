import Cookies from 'js-cookie';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confimPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState();

  const {uid, token} = useParams();

  const resetPassword = async (e) => {
    e.preventDefault();
    if (password !== confimPassword) {
      setErrors({new_password2: 'Passwords do not match.'});
      return;
    }

    try {
      setLoading(true);
      setErrors({});
      setMessage(null);
      const body = {
        new_password1: password,
        new_password2: confimPassword,
        uid,
        token,
      };
      const response = await fetch(`/auth/password/reset/confirm/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setMessage('Password changed successfully.');
        return;
      }
      const json = await response.json();
      if (json.token || json.uid) {
        json.non_field_errors = 'Cannot reset password.';
      }
      setErrors(json);
    } catch (reason) {
      console.log(reason);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <Form
          title="Reset Password"
          onSubmit={resetPassword}
          message={message}
          error={errors.non_field_errors}
        >
          <Input
            label="New Password"
            placeholder="Enter new password"
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.new_password1}
          />
          <Input
            label="Confirm New Password"
            placeholder="Enter new password again"
            type="password"
            required={true}
            value={confimPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.new_password2}
          />
          <Button type="submit" loading={loading} disabled={loading}>
            Save Password
          </Button>
        </Form>
      </div>
    </div>
  );
}
