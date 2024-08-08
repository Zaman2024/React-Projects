import React, { useState, useEffect } from 'react'
import { createBrowserRouter, Router,Route, BrowserRouter, RouterProvider, } from 'react-router-dom'
import Layout from './Layout/Layout'
import {Home, About,Contact,Github} from './Navbar/Navitems/index'
import { ThemeProvider } from './ComtextAPI/ThemeContext'




function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  };

  const lightTheme =() =>{
    setThemeMode('light')
  };

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode]);

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

  return (
    <ThemeProvider value={ {themeMode, lightTheme, darkTheme} }>
        <RouterProvider router={router}/>  
    </ThemeProvider>
  )
}

export default App
