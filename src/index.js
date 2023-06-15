import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Register, Login, Profile, Home, CreatePost, Navbar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const storedToken = localStorage.getItem('token')

    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const setAndStoreToken = (userToken) => {
    localStorage.setItem('token', userToken)
    setToken(userToken)
  }

  const logout = () => {
    setToken('')
    localStorage.removeItem('token')
  }

  return (
    <Router>
      <Navbar token={token} setToken={setAndStoreToken} logout={logout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login token={token} setToken={setAndStoreToken} />} />
        <Route path='/register' element={<Register setToken={setAndStoreToken} />} />
        <Route path='/profile' element={<Profile token={token} setToken={setAndStoreToken} />} />
        <Route path='/createpost' element={<CreatePost token={token} />} />
      </Routes>
    </Router>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);