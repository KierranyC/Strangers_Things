import React from 'react';
import ReactDOM from 'react-dom';
import { Posts } from './components'


const App = () => {

    return (
        <div className='app'>
            {/* <Register setRegister={Register} /> */}
            {/* <Search />
            <select>
                <option value='login'>Login</option>
                <option value='register'>Register</option>
            </select> */}
            <Posts />
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app'),
);