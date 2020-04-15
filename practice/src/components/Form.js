import React, { useState } from 'react';
import axios from 'axios';

function Form() {

  const [post, setPost] = useState({
    name: '',
    comment: ''
  });

  function changeHandler(event) {
    console.log(post)
    setPost({...post, [event.target.name]: event.target.value})
  }

  function submitHandler() {
    axios.post('http://practice-be.herokuapp.com/', post)
  }

  return (
    <div className='form'>
      <form onSubmit={submitHandler}>
        <input 
          type='text' 
          name='name' 
          placeholder='Name' 
          value={post.name} 
          onChange={changeHandler}
        />
        <input 
          type='text' 
          name='comment' 
          placeholder='Comment' 
          value={post.comment}
          onChange={changeHandler}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;