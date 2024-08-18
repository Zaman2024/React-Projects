// import { useState } from 'react'
// import Login from './Components/Login'
// import UserContextProvider from './Context/UserContextProvider'
// import Profile from './Components/Profile'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <UserContextProvider>
//       <Login/>
//       <Profile/>
//     </UserContextProvider>
//   )
// }

// export default App
//-------------------------------------
import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-slate-600  mx-60 my-8 p-5 rounded-2xl">
    <UserContextProvider>
        <h1 className='bg-slate-600 text-white p-5 text-center'>React Context Hook/APi</h1>
        <Profile/>
    </UserContextProvider>
    </div>
  )
}

export default App

