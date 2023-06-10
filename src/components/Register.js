import React, { useState } from 'react';
import Login from './Login'
//import CreatePost from './CreatePost';

const Register = () => {
  const [username, setUserame] = useState('')
  const [password, setPassword]= useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
 

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== passwordConfirmation) {
       return 'passwords do not match'
       
    }
    
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/users/register', {
        method: 'POST',
        headers: { 'Content-Type':
          'application/json' },
        body: JSON.stringify({ 
           user: { username,
           password } 
          })
      })
        const data = await response.json()
        console.log(data)
        return data
      } catch (error) {
      console.error(error.message)
    }
  }
  


  return ( 
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Userame:
        <input type='text' value={username} onChange={(event) => setUserame(event.target.value)} />
      </label>
      <label>
        Password:
        <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label>
        Confirm Password:
        <input type='password' value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
      </label>
      {/* {error && <div className='error'>{error}</div>} */}
      <button type='submit'>Register</button>
    </form>
    <button>Already have an account? Log in!</button>
    </>
  )

}

export default Register;