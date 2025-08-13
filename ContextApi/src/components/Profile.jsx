import React from 'react'
import UserContext from '../context/Usercontext';
import { useContext } from 'react';

function Profile() {
    const { user } = useContext(UserContext);
  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Welcome : {user.userName}</p>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  )
}

export default Profile
