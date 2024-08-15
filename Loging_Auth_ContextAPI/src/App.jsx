import { useState } from 'react'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'


function App() {


  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
