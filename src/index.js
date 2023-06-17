import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Register, Login, Profile, Home, CreatePost, Navbar, PostView } from './components';
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



  return (
    <Router>
      <Navbar token={token} setToken={setAndStoreToken} />
      <Routes>
        <Route path='*' element={<Home token={setAndStoreToken} />} />
        <Route path='/login' element={<Login token={token} setToken={setAndStoreToken} />} />
        <Route path='/register' element={<Register setToken={setAndStoreToken} />} />
        <Route path='/profile' element={<Profile token={setAndStoreToken} />} />
        <Route path='/createpost' element={<CreatePost token={token} />} />
        {/* <Route path='/postview' element={<PostView token={setToken} />} /> */}
      </Routes>
    </Router>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);