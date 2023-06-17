// import React, { useState, useEffect } from "react";


// const PostView = ({ token }) => {
//     const [post, setPost] = useState([])

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await fetch('https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts/:post_id')

//                 const data = await response.json();
//                 setPost(data.data.post)
//                 console.log(data);
//                 return data
//             } catch (err) {
//                 console.error(err);
//             }
//         }
//         fetchPost()
//     }, [])
//     return (
//         <>
//             <h1>{post.title}</h1>
//         </>
//     )
// }

// export default PostView;