import { useState } from 'react'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'


function App() {


  return (
    <UserContextProvider>
      <Login/>
    </UserContextProvider>
  )
}

export default App
