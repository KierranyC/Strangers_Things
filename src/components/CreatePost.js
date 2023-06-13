import React, { useState } from 'react';
import Navbar from './Navbar';


const CreatePost = ({ token, setToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [willDeliver, setWillDeliver] = useState('')

  const handleCreatePost = async (event) => {
    event.preventDefault();
    console.log('hi');
    try {
      const response = await fetch("https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorizatoin': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver
          }
        })
      })
      const data = await response.json()

      console.log(data)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Navbar />
      <h1>CreatePost</h1>
      <form onSubmit={handleCreatePost}>
        <label>
          Title:
          <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label>
          Description:
          <input type='text' value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <label>
          Price:
          <input type='text' value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <label>
          Will Deliver?
          <input type='text' value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)} />
          {/* <button onClick={() => setWillDeliver(true)}>Yes</button> */}
          {/* <button onClick={() => setWillDeliver(false)}>No</button> */}
          {/* {willDeliver !== null && <p>Answer: {willDeliver ? 'Yes' : 'No'}</p>} */}
        </label>
        <button type="submit">Create Post</button>
      </form>
    </>
  );
};




export default CreatePost;