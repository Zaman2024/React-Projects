import { useState } from 'react'
import Loging from './Components/Loging'
import UserContextProvider from './Context/UserContextProvider'


function App() {


  return (
    <UserContextProvider>
      <Loging/>
    </UserContextProvider>
  )
}

export default App
