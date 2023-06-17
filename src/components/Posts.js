import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Posts = ({ token }) => {
    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null)
    // const [loggedIn, setLoggedIn] = useState(false);
    // const [content, setContent] = useState('');

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts')
            const data = await response.json()
            setPosts(data.data.posts)
        }
        fetchPosts()
        // if (token) {
        //     setLoggedIn(true);
        // } else {
        //     setLoggedIn(false);
        // }
    }, [])

    const handlePostClick = (post) => {
        setSelectedPost(post)
    }

    const handleCloseClick = () => {
        setSelectedPost(null)
    }

    // const handleMessageChange = (event) => {
    //     setContent(event.target.value);
    // }

    // const postMessage = async (event) => {
    //     event.preventDefault()
    //     try {
    //         const response = await fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts/POST_ID/messages', {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}}`
    //             },
    //             body: JSON.stringify({
    //                 message: {
    //                     content
    //                 }
    //             })
    //         });
    //         const result = await response.json();
    //         console.log(result);
    //         return result
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    return (
        <div>
            {selectedPost ? (
                <div>
                    <h3>{selectedPost.title}</h3>
                    <div>Seller: {selectedPost.author.username}</div>
                    <div>Price: {selectedPost.price}</div>
                    <div>Location: {selectedPost.location}</div>
                    {selectedPost.willDeliver ? (
                        <div>Delivery ? Yes.</div>
                    ) : (
                        <div>Delivery? No.</div>
                    )}
                    <div>Description: {selectedPost.description}</div>
                    <div>Post Created At: {selectedPost.createdAt}</div>
                    <div>Post Updated At: {selectedPost.updatedAt}</div>
                    <Link to='*'><button onClick={handleCloseClick}>Close</button></Link>
                </div>
            ) : (
                posts.map(post =>
                    <div key={post['_id']} value={post}>
                        <Link to={`/posts/${post['_id']}`} onClick={() => handlePostClick(post)}>{post.title}</Link>
                        <div>Seller: {post.author.username}</div>
                        <div>Price: {post.price}</div>
                        <div>Location: {post.location}</div>
                        {post.willDeliver ? (
                            <div>Delivery ? Yes.</div>
                        ) : (
                            <div>Delivery? No.</div>
                        )}
                        <div>Description: {post.description}</div>
                        <div>Post Created At: {post.createdAt}</div>
                        <div>Post Updated At: {post.updatedAt}</div>
                    </div>
                ))}
        </div>

        // <div>
        //     {selectedPost && (
        //         <div>
        //             <h3>{selectedPost.title}</h3>
        //             <div>{selectedPost.description}</div>
        //             <button onClick={handleCloseClick}>Close</button>
        //             {/* {loggedIn ? (
        //                 <div className="message-box">
        //                     <h4>Send a message to the post author:</h4>
        //                     <form onSubmit={postMessage}>
        //                         <textarea
        //                             value={content}
        //                             onChange={handleMessageChange}
        //                             placeholder="Enter your message"
        //                         />
        //                         <br />
        //                         <button type="submit">Send message</button>
        //                     </form>
        //                 </div>
        //             ) : (
        //                 <Link to="/login">Login to send a message.</Link>
        //             )} */}
        //         </div>
        //     )}
        //     {!selectedPost &&
        //         posts.map((post) => (
        //             <div key={post._id} value={post}>
        //                 <Link
        //                     to={`/posts/${post._id}`}
        //                     onClick={() => handlePostClick(post)}
        //                 >
        //                     {post.title}
        //                 </Link>
        //                 <div>{post.description}</div>
        //             </div>
        //         ))}
        // </div>
    )

}



export default Posts;
