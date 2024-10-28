import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './Store/AuthSlice' 
import { Header, Footer } from './components'


import './App.css'



function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))

      }else {
        dispatch(logout())
      }
    })

    .finally(() => setLoading(false) )
  }, [])


  return !loading ? (
    <div className='min-h-screen bg-slate-400'>
      <Header />
      <main>
        //Todo : {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  ) : null
}

export default App
