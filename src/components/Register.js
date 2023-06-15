import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import Navbar from './Navbar';

const Register = ({ setToken }) => {
  const [username, setUserame] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== passwordConfirmation) {
      return alert('passwords do not match')
    }

    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/users/register', {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      })
      const data = await response.json()
      setUserame('')
      setPassword('')
      setToken(data.data.token)
      console.log(data)
      return data
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>

      <h1>Register</h1>
      <form className="Register-form" onSubmit={handleSubmit}>
        <label>
          Userame:
          <input type='text' minLength={8} maxLength={15} value={username} onChange={(event) => setUserame(event.target.value)} />
        </label>
        <label> Email:
          <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' minLength={8} maxLength={15} value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>
          Confirm Password:
          <input type='password' value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
        </label>
        <button type='submit'>Register</button>
      </form>
      <Link to='/login'><button>Already have an account? Log in!</button></Link>
    </>
  )

}

export default Register;