import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          user: { username, 
          password } 
        })
      });
      const data = await response.json();
      onLogin(data)
      console.log(data)
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={event => setUserame(event.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
      <button>Dont't have an account? Register now!</button>
    </>
  );
};

export default Login;