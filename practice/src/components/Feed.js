import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Feed() {

  // const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('http://practice-be.herokuapp.com/')
    .then(res => {
      console.log(res)
      setUsers(res.data.post)
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])

  if (!users) {
    return <div>loading...</div>
  }

  return (
    <div className="Feed">
      {users.map(user => (
        <div>
          <div>{user.name}</div>
          <div>{user.commit}</div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
