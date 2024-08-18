// import React, { useContext } from 'react'
// import UserContext from '../Context/UserContext'

// function Profile() {
//   const {User} = useContext(UserContext)
//   if(!User) return <div>Please Login</div>
//   return <div> Welcome {User.username}</div>
// }

// export default Profile

//-----------------------------
import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {User} = useContext(UserContext)
  if(!User) return <div>Please Login</div>
  return <div>Welcome {User.username}</div>
}

export default Profile
