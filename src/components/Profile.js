import React, { useState, useEffect } from "react";


const Profile = () => {
    const [currentUser, setCurrentUser] = useState('')
    const [userPosts, setUserPosts] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/users/me", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log(response)
                const data = await response.json();
                setCurrentUser(data.data.username)
                setUserPosts(data.data.posts)
                console.log(data);
                return data
            } catch (err) {
                console.error(err);
            }
        }
        fetchUserData()
    }, [])

    return (
        <>
            <h1>Profile</h1>
            <h2>{currentUser}</h2>
            {userPosts.map(userPost =>
                <div key={userPost['_id']} value={userPost}>
                    <h3>{userPost.title}</h3>
                    <div>{userPost.price}</div>
                    <div>{userPost.description}</div>
                </div>
            )}
        </>
    )


}


export default Profile;