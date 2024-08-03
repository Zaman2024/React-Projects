import React, { useState, useEffect } from 'react'
import { createBrowserRouter, Router,Route, BrowserRouter, RouterProvider, } from 'react-router-dom'
import Layout from './Layout/Layout'
import {Home, About,Contact,Github} from './Navbar/Navitems/index'
import { ThemeProvider } from './ComtextAPI/ThemeContext'
// import { Home } from './Navbar/Navitems'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index:'Home',
        element:<Home/>
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path:'Github',
        element:<Github/>
      },
      {
        path:'Contact',
        element:<Contact/>
      }
    ]
  }
])

function App() {
  const [themeMode, setThemeMode] = useState('light')


  const darkMode = () => {
    setThemeMode('dark')
  }

  const lightMode =() =>{
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
        <RouterProvider router={router}/>
    </ ThemeProvider>
  )
}

export default App
