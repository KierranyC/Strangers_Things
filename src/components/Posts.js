import React, { useState, useEffect } from 'react';


const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts')
            const data = await response.json()
            setPosts(data.data.posts)
        }
        fetchPosts()
    }, [])

    // useEffect(() => {
    //     fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts')
    //         .then((res) => res.json())
    //         .then((body) => {
    //             setPosts(body.data.posts);
    //         })
    //         .catch((error) => {
    //             console.log('uh oh', error);
    //         });
    // }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post['_id']} value={post}>
                    <h3> {post.title} </h3>
                    <div>{post.description}</div>
                </div>
            )}
        </div>
    )

}



export default Posts;
