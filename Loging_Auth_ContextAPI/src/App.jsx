import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 
        className='flex justify-center items-center m-auto w-full h-screen bg-slate-900 text-white text-xl font-bold'>
          Mobile Star
      </h1>
    </>
  )
}

export default App
