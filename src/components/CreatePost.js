import React, { useState } from 'react';


const CreatePost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [willDeliver, setWillDeliver] = useState(false)

  const handleCreatePost = async (event) => {
    event.preventDefault();
    console.log('hi');
    try {
      const response = await fetch("https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-PT/posts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
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
          Location:
          <input type='text' value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
        <label>
          Will Deliver?
          <input type='checkbox' checked={willDeliver} onChange={(event) => setWillDeliver(event.target.checked)} />
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