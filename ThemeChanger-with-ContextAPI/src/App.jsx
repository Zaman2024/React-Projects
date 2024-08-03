import { useState } from 'react'
import { createBrowserRouter, Router,Route, BrowserRouter, RouterProvider, } from 'react-router-dom'
import Layout from './Layout/Layout'
import {Home, About,Contact,Github} from './Navbar/Navitems/index'
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

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
