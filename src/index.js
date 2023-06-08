import React from 'react';
import ReactDOM from 'react-dom';
import { Register, Search, Login, Posts } from '/.components'


const App = () => {
    
    return (
        <div className='app'>
        <Register />
        <Search />
        <select>
            <option value='login'>Login</option>
            <option value='register'>Register</option>
        </select>
        </div>
        )
    
}


ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );