import React from "react";
import Posts from "./Posts";
import Navbar from "./Navbar";


const Home = () => {

    return (

        <div className='Home'>
            <h1>Strangers Things</h1>
            <Navbar />
            <Posts />
        </div>
    )
}

export default Home;