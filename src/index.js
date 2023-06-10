import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Register, Login, CreatePost } from './components';
// import Posts from './components';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


  const App = () => {
     const [token, setToken] = useState("");
  
    function handleLogin(newToken) {
      setToken(newToken);
    }
  
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={{token} ?  <CreatePost token={token} />  :  <Register /> }/>
          <Route exact path="/login" element={<Login onLogin={handleLogin}/>}/>
          </Routes>
      </Router>
    )
  }


ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );