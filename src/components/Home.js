import React from "react";
import Posts from "./Posts";
import Navbar from "./Navbar";


const Home = ({ token }) => {

    return (

        <div className='Home'>
            <h1>Strangers Things</h1>
            <Posts token={token} />
        </div>
    )
}

export default Home;