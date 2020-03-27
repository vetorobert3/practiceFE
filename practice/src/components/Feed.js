import React, { useEffect, useState } from 'react';
import axios from 'axios';

const [users, setUsers] = useState(),

useEffect(() => {
  axios.get('url')
  .then(res => {
    console.log(res)
    setUsers(res)
  })
  .catch(err => {
    console.log(err.message)
  })
})

function Feed() {
  return (
    <div className="Feed">

    </div>
  );
}

export default Feed;
