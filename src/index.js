import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Register, Login, Profile, Home, CreatePost } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  const [token, setToken] = useState('')
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home token={token} setToken={setToken}/>} />
        <Route path='/login' element={<Login token={token} setToken={setToken}/>} />
        <Route path='/register' element={<Register token={token} setToken={setToken}/>} />
        <Route path='/profile' element={<Profile token={token} setToken={setToken}/>} />
        <Route path='/createpost' element={<CreatePost token={token} setToken={setToken}/>} />
      </Routes>
    </Router>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);