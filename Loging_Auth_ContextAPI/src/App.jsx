import { useState } from 'react'
import Loging from './Components/Loging'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Loging/>
    </div>
  )
}

export default App
