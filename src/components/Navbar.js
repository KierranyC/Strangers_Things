import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


const Navbar = ({ token, setToken }) => {
    const navigate = useNavigate()

    const logout = () => {
        setToken('')
        localStorage.removeItem('token')
        navigate('/login')
    }

    const conditionallyRenderLoggedInNav = () => {
        if (token) {
            return (
                <>
                    <Link to='/'>
                        Home
                    </Link>
                    {/* <Link to='/postview'>
                        Post View
                    </Link> */}
                    <Link to='/profile'>
                        Profile
                    </Link>
                    <Link to='/createpost'>
                        CreatePost
                    </Link>
                    <Button variant={'contained'} onClick={logout}>
                        Log Out
                    </Button>
                </>
            )
        }

        else {
            return (
                <>
                    <Link to='/'>
                        Home
                    </Link>
                    {/* <Link to='/postview'>
                        Post View
                    </Link> */}
                    <Link to='/login'>
                        Login
                    </Link>
                    <Link to='/register'>
                        Register
                    </Link>
                </>
            )
        }
    }

    return (

        <nav>
            {conditionallyRenderLoggedInNav()}
        </nav>

    )
}

export default Navbar;