import React, { useContext, useState } from 'react'
import UserContext from '../Context/userContext'

function Loging() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

const handleSubmit = (e) => {
    e.preventDefault ();
    setUser({userName, password})
}
  return (
    <div>
        <h1>Loging</h1>
        <div>
            <input
                type='text'
                value={userName}
                onChange={e = setUsername(e.target.value)}
                placeholder='Username'
            />
        </div>
            <input
                type='password'
                value={password}
                onChange={e = setPassword(e.target.value)}
                placeholder='Password'
            />
        <div>
            <button onClick={handleSubmit}>Submit</button>

        </div>
      
    </div>
  )
}

export default Loging
