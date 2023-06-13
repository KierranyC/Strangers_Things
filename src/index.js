import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Register, Login, Profile, Home, CreatePost } from './components';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/createpost' element={<CreatePost />} />
      </Routes>
    </Router>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);