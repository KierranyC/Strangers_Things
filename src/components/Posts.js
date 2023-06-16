import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Posts = ({ token }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts')
            const data = await response.json()
            setPosts(data.data.posts)
        }
        fetchPosts()
    }, [])

    const postMessage = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts/POST_ID/messages', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}}`
                },
                body: JSON.stringify({
                    message: {
                        content
                    }
                })
            });
            const result = await response.json();
            console.log(result);
            return result
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            {posts.map(post => (
                <div key={post['_id']} value={post}>
                    <h3> {post.title} </h3>
                    <div>{post.description}</div>
                    <Link to='/postview'>View my post</Link>
                </div>
            ))}
        </div>
    )

}



export default Posts;
