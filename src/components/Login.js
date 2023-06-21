import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      });
      const data = await response.json();
      setUserame('')
      setPassword('')
      setToken(data.data.token)
      console.log(data)
      if (setToken) {
        navigate('/profile')
      }
      return data
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className='login'>
      <h1 className='login-title'>Login</h1>
      <form className='login-form' onSubmit={handleLogin}>
        <label className='login-username'>
          Username:
          <input type="text" value={username} required onChange={event => setUserame(event.target.value)} className='login-username-input' />
        </label>
        <label className='login-password'>
          Password:
          <input type="password" value={password} required onChange={event => setPassword(event.target.value)} className='login-password-input' />
        </label>
        <button className='login-button' type="submit">Login</button>
      </form>
      <Link to='/register' className='redirect-register'><button>Dont't have an account? Register now!</button></Link>
    </div>
  );
};

export default Login;